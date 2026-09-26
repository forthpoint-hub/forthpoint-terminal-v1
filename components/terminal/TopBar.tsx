import { dseIndices, bdMacro } from "@/data/demo/markets";

function Stat({ label, value, change }: { label: string; value: string; change?: string }) {
  const up = change?.startsWith("+");
  const down = change?.startsWith("-");
  return (
    <div className="flex items-baseline gap-2 whitespace-nowrap">
      <span className="text-base-500 text-xs">{label}</span>
      <span className="font-mono text-sm mono-tab text-base-100">{value}</span>
      {change && (
        <span className={`font-mono text-xs mono-tab ${up ? "text-signal-up" : down ? "text-signal-down" : "text-base-400"}`}>
          {change}
        </span>
      )}
    </div>
  );
}

export default function TopBar() {
  return (
    <div className="border-b border-base-800 bg-base-950 px-6 py-2.5 flex items-center gap-6 overflow-x-auto">
      <Stat label="DSEX" value={dseIndices.DSEX.last.toFixed(2)} change={`${dseIndices.DSEX.change >= 0 ? "+" : ""}${dseIndices.DSEX.changePct.toFixed(2)}%`} />
      <Stat label="DS30" value={dseIndices.DS30.last.toFixed(2)} change={`${dseIndices.DS30.change >= 0 ? "+" : ""}${dseIndices.DS30.changePct.toFixed(2)}%`} />
      <Stat label="USD/BDT" value={bdMacro.usdBdt.last.toFixed(2)} change={`${bdMacro.usdBdt.change >= 0 ? "+" : ""}${bdMacro.usdBdt.changePct.toFixed(2)}%`} />
      <Stat label="Inflation" value={`${bdMacro.inflationPct.toFixed(1)}%`} />
      <span className="ml-auto text-[10px] font-mono text-base-600">DEMO DATA — NOT LIVE MARKET DATA</span>
    </div>
  );
}
