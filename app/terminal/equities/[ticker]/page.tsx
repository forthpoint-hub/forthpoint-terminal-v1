import { notFound } from "next/navigation";
import PriceChart from "@/components/charts/PriceChart";
import { dseEquities, dseQuotes, dseFundamentals, demoOHLCV } from "@/data/demo/equities";
import { DATA_SOURCE_LABEL } from "@/types/instrument";

export function generateStaticParams() {
  return dseEquities.map((e) => ({ ticker: e.symbol }));
}

export default function EquityPage({ params }: { params: { ticker: string } }) {
  const symbol = params.ticker.toUpperCase();
  const instrument = dseEquities.find((e) => e.symbol === symbol);
  const quote = dseQuotes[symbol];
  const fundamentals = dseFundamentals[symbol];

  if (!instrument || !quote || !fundamentals) notFound();

  const chartData = demoOHLCV(symbol);
  const up = quote.change >= 0;

  return (
    <div className="p-6 space-y-6 max-w-5xl">
      <div>
        <div className="text-xs text-base-500 mb-1">{instrument.exchange} · {instrument.sector}</div>
        <div className="flex items-baseline gap-4 flex-wrap">
          <h1 className="font-serif text-3xl text-base-100">{instrument.symbol}</h1>
          <span className="text-base-400 text-sm">{instrument.name}</span>
        </div>
        <div className="flex items-baseline gap-3 mt-2">
          <span className="font-mono text-2xl mono-tab text-base-100">৳{quote.last.toFixed(2)}</span>
          <span className={`font-mono text-sm mono-tab ${up ? "text-signal-up" : "text-signal-down"}`}>
            {up ? "+" : ""}{quote.change.toFixed(2)} ({up ? "+" : ""}{quote.changePct.toFixed(2)}%)
          </span>
        </div>
        <p className="text-xs text-base-600 font-mono mt-1">{DATA_SOURCE_LABEL}</p>
      </div>

      <div className="border border-base-800 p-4">
        <PriceChart data={chartData} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-base-800 border border-base-800">
        {[
          ["Market Cap", `৳${fundamentals.marketCap.toLocaleString()} cr`],
          ["P/E", fundamentals.pe?.toFixed(1)],
          ["P/B", fundamentals.pb?.toFixed(1)],
          ["EPS", fundamentals.eps?.toFixed(2)],
          ["Dividend Yield", `${fundamentals.dividendYield?.toFixed(1)}%`],
          ["52W High", fundamentals.week52High.toFixed(2)],
          ["52W Low", fundamentals.week52Low.toFixed(2)],
          ["Volume", quote.volume?.toLocaleString()],
        ].map(([label, value]) => (
          <div key={label} className="bg-base-950 px-4 py-3">
            <div className="text-xs text-base-500 mb-1">{label}</div>
            <div className="font-mono text-sm mono-tab text-base-100">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="border border-base-800 p-4">
          <h3 className="text-xs font-mono uppercase tracking-wide text-base-500 mb-3">Valuation</h3>
          <dl className="text-sm space-y-2">
            <Row label="ROE" value={`${fundamentals.roe?.toFixed(1)}%`} />
            <Row label="ROA" value={`${fundamentals.roa?.toFixed(1)}%`} />
            <Row label="Debt/Equity" value={fundamentals.debtToEquity?.toFixed(2)} />
          </dl>
        </div>
        <div className="border border-base-800 p-4">
          <h3 className="text-xs font-mono uppercase tracking-wide text-base-500 mb-3">Growth</h3>
          <dl className="text-sm space-y-2">
            <Row label="Revenue Growth" value={`${fundamentals.revenueGrowthPct?.toFixed(1)}%`} />
            <Row label="Earnings Growth" value={`${fundamentals.earningsGrowthPct?.toFixed(1)}%`} />
          </dl>
        </div>
      </div>

      <div className="border border-base-800 p-4">
        <h3 className="text-xs font-mono uppercase tracking-wide text-base-500 mb-3">Related Companies (DSE)</h3>
        <div className="flex flex-wrap gap-3">
          {dseEquities.filter((e) => e.symbol !== symbol).map((e) => (
            <a
              key={e.symbol}
              href={`/terminal/equities/${e.symbol}`}
              className="text-sm font-mono text-base-300 border border-base-800 px-3 py-1.5 hover:border-base-500"
            >
              {e.symbol}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-base-500">{label}</dt>
      <dd className="font-mono text-base-100">{value}</dd>
    </div>
  );
}
