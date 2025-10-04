"use client";

import * as echarts from "echarts";
import { useEffect, useRef } from "react";

export default function TravelRoutesMap() {
  const ref = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<echarts.EChartsType | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chart = echarts.init(ref.current);
    chartRef.current = chart;

    const chRoughLatitude = 47;

    async function load() {
      chart.showLoading();
      try {
        const res = await fetch(`/data/geo.json`);
        const geoJSON = await res.json();

        echarts.registerMap("ch", geoJSON);

        chart.setOption({
          title: { text: "Travel Routes" },
          tooltip: {},
          geo: {
            map: "ch",
            roam: true,
            aspectScale: Math.cos((chRoughLatitude * Math.PI) / 180),
            label: {
              show: true,
              textBorderColor: "#fff",
              textBorderWidth: 2,
            },
          },
          series: [
            {
              type: "graph",
              coordinateSystem: "geo",
              data: [
                { name: "a", value: [7.667821250000001, 46.791734269956265] },
                { name: "b", value: [7.404848750000001, 46.516308805996054] },
                { name: "c", value: [7.376673125000001, 46.24728858538375] },
                { name: "d", value: [8.015320625000001, 46.39460918238572] },
                { name: "e", value: [8.616400625, 46.7020608630855] },
                { name: "f", value: [8.869981250000002, 46.37539345234199] },
                { name: "g", value: [9.546196250000001, 46.58676648282309] },
                { name: "h", value: [9.311399375, 47.182454114178896] },
                { name: "i", value: [9.085994375000002, 47.55395822835779] },
                { name: "j", value: [8.653968125000002, 47.47709530818285] },
                { name: "k", value: [8.203158125000002, 47.44506909144329] },
              ],
              edges: [
                { source: "a", target: "b" },
                { source: "b", target: "c" },
                { source: "c", target: "d" },
                { source: "d", target: "e" },
                { source: "e", target: "f" },
                { source: "f", target: "g" },
                { source: "g", target: "h" },
                { source: "h", target: "i" },
                { source: "i", target: "j" },
                { source: "j", target: "k" },
              ],
              edgeSymbol: ["none", "arrow"],
              edgeSymbolSize: 5,
              lineStyle: {
                color: "#718adbff",
                opacity: 1,
              },
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
      chartRef.current = null;
    };
  }, []);

  return <div ref={ref} style={{ width: "100%", height: 480 }} />;
}