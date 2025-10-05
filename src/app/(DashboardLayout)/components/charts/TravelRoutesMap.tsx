import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function TravelRoutesMap() {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        const chart = echarts.init(ref.current);

        // --- helpers to scan bbox/centroid from (Multi)Polygon coords ---
        function walkCoords(geom: any, cb: (lng: number, lat: number) => void) {
            const type = geom?.type;
            const coords = geom?.coordinates;
            if (!coords) return;
            if (type === "Polygon") {
                coords.forEach((ring: number[][]) => ring.forEach(([lng, lat]) => cb(lng, lat)));
            } else if (type === "MultiPolygon") {
                coords.forEach((poly: number[][][]) =>
                    poly.forEach((ring: number[][]) => ring.forEach(([lng, lat]) => cb(lng, lat))),
                );
            }
        }

        function bboxAndCentroid(fc: any) {
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            let sx = 0, sy = 0, n = 0;
            for (const f of fc.features || []) {
                walkCoords(f.geometry, (x, y) => {
                    if (x < minX) minX = x;
                    if (y < minY) minY = y;
                    if (x > maxX) maxX = x;
                    if (y > maxY) maxY = y;
                    sx += x; sy += y; n++;
                });
            }
            const center: [number, number] = n ? [sx / n, sy / n] : [0, 0];
            const bbox = [minX, minY, maxX, maxY] as const;
            return { center, bbox };
        }

        async function load() {
            chart.showLoading();
            try {
                const res = await fetch("/data/geo.json");
                const geoJSON = await res.json();

                echarts.registerMap("beach", geoJSON);

                const { center, bbox } = bboxAndCentroid(geoJSON);
                const roughLat = (bbox[1] + bbox[3]) / 2; // for aspectScale

                // Build a short shark path around the centroid (small offsets)
                const [cx, cy] = center;
                const path = [
                    { name: "Start", value: [cx - 0.12, cy - 0.06] },
                    { name: "A", value: [cx - 0.06, cy - 0.02] },
                    { name: "B", value: [cx + 0.02, cy + 0.02] },
                    { name: "C", value: [cx + 0.08, cy + 0.04] },
                    { name: "End", value: [cx + 0.12, cy + 0.06] },
                ];

                chart.setOption<echarts.EChartsOption>({
                    backgroundColor: "transparent",
                    title: {
                        text: "Shark Travel Routes (Beach GeoJSON)",
                        left: "center",
                        top: 8,
                        textStyle: { color: "#C5CAE9", fontWeight: 600 },
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: (p: any) =>
                            `${p.name || "Point"}<br/>[${p.value[0].toFixed(3)}, ${p.value[1].toFixed(3)}]`,
                    },
                    geo: {
                        map: "beach",
                        roam: true,
                        // Fit & keep correct aspect for local area maps
                        layoutCenter: ["50%", "50%"],
                        layoutSize: "100%",
                        aspectScale: Math.cos((roughLat * Math.PI) / 180),
                        label: { show: false },
                        itemStyle: {
                            areaColor: "#143b56",
                            borderColor: "rgba(255,255,255,0.15)",
                        },
                        emphasis: { itemStyle: { areaColor: "#1f486a" } },
                    },
                    series: [
                        // Dotted line route with arrowheads
                        {
                            name: "Route",
                            type: "lines",
                            coordinateSystem: "geo",
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 5,
                                trailLength: 0.25,
                                symbol: "arrow",
                                symbolSize: 6,
                            },
                            lineStyle: {
                                color: "#00C3FF",
                                width: 2,
                                opacity: 0.9,
                                type: "dashed",
                            },
                            data: path.slice(1).map((p, i) => ({ coords: [path[i].value, p.value] })),
                        },
                        // Shark points with ripple
                        {
                            name: "Shark Points",
                            type: "effectScatter",
                            coordinateSystem: "geo",
                            rippleEffect: { brushType: "stroke" },
                            symbolSize: 10,
                            label: { formatter: "{b}", position: "right", color: "#fff", show: true },
                            itemStyle: { color: "#5ab2f8" },
                            data: path,
                        },
                    ],
                });
            } finally {
                chart.hideLoading();
            }
        }

        load();
        const onResize = () => chart.resize();
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
            chart.dispose();
        };
    }, []);

    return <div ref={ref} style={{ width: "100%", height: 480 }} />;
}