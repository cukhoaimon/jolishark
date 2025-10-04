"use client";

import * as echarts from "echarts";
import { useEffect, useRef } from "react";

export default function DynamicTimeSeriesChart() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<echarts.EChartsType | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const chart = echarts.init(containerRef.current);
        chartRef.current = chart;

        // ----- seed data (same logic as original) -----
        const oneDay = 24 * 3600 * 1000;
        let now = new Date(1997, 9, 3);
        let value = 5 + Math.random() * 5;

        const randomData = () => {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
                    Math.round(value),
                ],
            };
        };

        const data: Array<{ name: string; value: [string, number] }> = [];
        for (let i = 0; i < 1000; i++) data.push(randomData());

        const option: echarts.EChartsOption = {
            title: { text: "Data" },
            tooltip: {
                trigger: "axis",
                formatter: (params: any) => {
                    const p = Array.isArray(params) ? params[0] : params;
                    const date = new Date(p.name);
                    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} : ${p.value[1]}`;
                },
                axisPointer: { animation: false },
            },
            xAxis: {
                type: "time",
                splitLine: { show: false },
            },
            yAxis: {
                type: "value",
                boundaryGap: [0, "100%"],
                splitLine: { show: false },
            },
            series: [
                {
                    name: "Fake Data",
                    type: "line",
                    showSymbol: false,
                    data,
                },
            ],
            grid: { left: 40, right: 24, top: 48, bottom: 32 },
        };

        chart.setOption(option);

        // ----- live update -----
        const interval = setInterval(() => {
            for (let i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }
            chart.setOption({ series: [{ data }] });
        }, 1000);

        // ----- responsive -----
        const onResize = () => chart.resize();
        window.addEventListener("resize", onResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", onResize);
            chart.dispose();
            chartRef.current = null;
        };
    }, []);

    return <div ref={containerRef} style={{ width: "100%", height: 420 }} />;
}