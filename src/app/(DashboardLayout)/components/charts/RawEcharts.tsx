"use client";

import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import type { EChartsOption } from "echarts";

export default function RawEcharts({ option }: { option: EChartsOption }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        const chart = echarts.init(ref.current);

        const themedOption: EChartsOption = {
            backgroundColor: "transparent",
            ...option,
            title: Array.isArray(option.title)
                ? option.title.map((t) => ({
                    ...t,
                    textStyle: {
                        color: "#C5CAE9",
                        fontWeight: 500,
                        ...(t.textStyle || {}),
                    },
                }))
                : {
                    ...option.title,
                    textStyle: {
                        color: "#C5CAE9",
                        fontWeight: 500,
                        ...(option.title?.textStyle || {}),
                    },
                },
            textStyle: {
                color: "#BFC6E0",
            },
        };

        chart.setOption(themedOption);

        const onResize = () => chart.resize();
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            chart.dispose();
        };
    }, [option]);

    return <div ref={ref} style={{ width: "100%", height: 400 }} />;
}