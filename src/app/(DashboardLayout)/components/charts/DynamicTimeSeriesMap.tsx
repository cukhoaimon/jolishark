import { useEffect, useRef } from "react";
import * as echarts from "echarts";

type DynamicTimeSeriesChartProps = {
    title?: string;
    days?: number; // how many days of data to generate
    updateIntervalMs?: number; // speed of live update
    initialValue?: number; // starting value
};

export default function DynamicTimeSeriesChart({
                                                   title = "Dynamic Time Series",
                                                   days = 100, // default range
                                                   updateIntervalMs = 1000,
                                                   initialValue = 5,
                                               }: DynamicTimeSeriesChartProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<echarts.EChartsType | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const chart = echarts.init(containerRef.current);
        chartRef.current = chart;

        // ----- seed data -----
        const oneDay = 24 * 3600 * 1000;
        let now = new Date(2025, 4, 3);
        let value = initialValue + Math.random() * 5;

        const randomData = () => {
            now = new Date(+now + oneDay);
            value = Math.max(0, value + Math.random() * 4 - 2); // keep somewhat stable
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
                    Math.round(value * 10) / 10,
                ],
            };
        };

        const data: Array<{ name: string; value: (string | number)[] }> = [];
        for (let i = 0; i < days; i++) data.push(randomData());

        const option: echarts.EChartsOption = {
            backgroundColor: "transparent",
            title: {
                text: title,
                left: "center",
                top: 10,
                textStyle: {
                    color: "#C5CAE9", // lighter text for dark themes
                    fontSize: 16,
                    fontWeight: 500,
                },
            },
            tooltip: {
                trigger: "axis",
                formatter: (params: any) => {
                    const p = Array.isArray(params) ? params[0] : params;
                    const date = new Date(p.name);
                    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} : <b>${p.value[1]}</b>`;
                },
                axisPointer: { animation: false },
            },
            xAxis: {
                type: "time",
                axisLine: { lineStyle: { color: "#888" } },
                axisLabel: { color: "#AAA" },
                splitLine: { show: false },
            },
            yAxis: {
                type: "value",
                boundaryGap: [0, "100%"],
                axisLine: { lineStyle: { color: "#888" } },
                axisLabel: { color: "#AAA" },
                splitLine: { show: false },
            },
            grid: { left: 40, right: 24, top: 64, bottom: 32 },
            series: [
                {
                    name: "Random Data",
                    type: "line",
                    showSymbol: false,
                    smooth: true,
                    areaStyle: { opacity: 0.2 },
                    lineStyle: { width: 2, color: "#5B8DEF" },
                    data,
                },
            ],
        };

        chart.setOption(option);

        // ----- live update -----
        const interval = setInterval(() => {
            for (let i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }
            chart.setOption({ series: [{ data }] });
        }, updateIntervalMs);

        // ----- resize listener -----
        const onResize = () => chart.resize();
        window.addEventListener("resize", onResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", onResize);
            chart.dispose();
            chartRef.current = null;
        };
    }, [title, days, updateIntervalMs, initialValue]);

    return <div ref={containerRef} style={{ width: "100%", height: 420 }} />;
}