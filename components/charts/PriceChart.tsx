"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { OHLCV } from "@/types/instrument";

export default function PriceChart({ data }: { data: OHLCV[] }) {
  const up = data.length > 1 && data[data.length - 1].close >= data[0].close;
  const color = up ? "#3ba55d" : "#c9524d";

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.25} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#1a1e23" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fill: "#5a626c", fontSize: 11 }}
          tickFormatter={(d: string) => d.slice(5)}
          axisLine={{ stroke: "#262b32" }}
          tickLine={false}
          minTickGap={40}
        />
        <YAxis
          domain={["auto", "auto"]}
          tick={{ fill: "#5a626c", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={54}
        />
        <Tooltip
          contentStyle={{ background: "#14171b", border: "1px solid #262b32", fontSize: 12 }}
          labelStyle={{ color: "#aab0b8" }}
          itemStyle={{ color: "#e8eaed" }}
        />
        <Area type="monotone" dataKey="close" stroke={color} strokeWidth={1.5} fill="url(#priceFill)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
