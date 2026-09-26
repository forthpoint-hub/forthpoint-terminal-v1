import Link from "next/link";
import { dseQuotes } from "@/data/demo/equities";
import { globalMarkets, commoditySnapshot, bdMacro } from "@/data/demo/markets";
import { DATA_SOURCE_LABEL } from "@/types/instrument";

const GROUPS: { name: string; rows: { symbol: string; label: string; last: number; change: number; changePct: number; href?: string }[] }[] = [
  {
    name: "DSE CORE",
    rows: Object.values(dseQuotes).map((q) => ({
      symbol: q.symbol,
      label: q.symbol,
      last: q.last,
      change: q.change,
      changePct: q.changePct,
      href: `/terminal/equities/${q.symbol}`,
    })),
  },
  {
    name: "GLOBAL",
    rows: [globalMarkets.SPX, globalMarkets.NDX, globalMarkets.N225, globalMarkets.HSI].map((q) => ({
      symbol: q.symbol,
      label: q.symbol,
      last: q.last,
      change: q.change,
      changePct: q.changePct,
    })),
  },
  {
    name: "MACRO",
    rows: [
      { symbol: "USD/BDT", label: "USD/BDT", last: bdMacro.usdBdt.last, change: bdMacro.usdBdt.change, changePct: bdMacro.usdBdt.changePct },
      { symbol: "Gold", label: "Gold", last: globalMarkets.XAU.last, change: globalMarkets.XAU.change, changePct: globalMarkets.XAU.changePct },
      { symbol: "Brent", label: "Brent", last: globalMarkets.BRENT.last, change: globalMarkets.BRENT.change, changePct: globalMarkets.BRENT.changePct },
      { symbol: "Wheat", label: "Wheat", last: commoditySnapshot.wheat.last, change: commoditySnapshot.wheat.change, changePct: commoditySnapshot.wheat.changePct },
    ],
  },
];

export default function WatchlistPage() {
  return (
    <div className="p-6 space-y-8 max-w-3xl">
      <div>
        <h1 className="font-serif text-2xl text-base-100 mb-1">Watchlists</h1>
        <p className="text-xs text-base-600 font-mono">{DATA_SOURCE_LABEL}</p>
      </div>

      {GROUPS.map((group) => (
        <section key={group.name}>
          <h2 className="text-xs font-mono uppercase tracking-wide text-base-500 mb-2">{group.name}</h2>
          <div className="border border-base-800 divide-y divide-base-800">
            {group.rows.map((row) => {
              const up = row.change >= 0;
              const content = (
                <div className="flex items-center justify-between px-4 py-2.5 hover:bg-base-900 transition-colors">
                  <span className="text-sm text-base-200">{row.label}</span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm mono-tab text-base-100">
                      {row.last.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className={`font-mono text-xs mono-tab w-24 text-right ${up ? "text-signal-up" : "text-signal-down"}`}>
                      {up ? "+" : ""}
                      {row.changePct.toFixed(2)}%
                    </span>
                  </div>
                </div>
              );
              return row.href ? (
                <Link key={row.symbol} href={row.href}>{content}</Link>
              ) : (
                <div key={row.symbol}>{content}</div>
              );
            })}
          </div>
        </section>
      ))}

      <p className="text-xs text-base-600">
        Adding/removing custom instruments arrives once watchlists move to a persisted
        store (Phase 2).
      </p>
    </div>
  );
}
