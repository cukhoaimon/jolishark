"use client";

import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import type { EChartsOption } from "echarts";

export default function RawEcharts({ option }: { option: EChartsOption }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = echarts.init(ref.current);
    chart.setOption(option);

    const onResize = () => chart.resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      chart.dispose();
    };
  }, [option]);

  return <div ref={ref} style={{ width: "100%", height: 400 }} />;
}