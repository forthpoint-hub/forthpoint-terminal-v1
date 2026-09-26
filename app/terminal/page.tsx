import MarketCard from "@/components/market/MarketCard";
import { dseIndices, globalMarkets, bdMacro, commoditySnapshot } from "@/data/demo/markets";
import { dseQuotes } from "@/data/demo/equities";
import { DATA_SOURCE_LABEL } from "@/types/instrument";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="font-serif text-2xl text-base-100 mb-1">Dashboard</h1>
        <p className="text-sm text-base-500">{DATA_SOURCE_LABEL}</p>
      </div>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wide text-base-500 mb-3">Dhaka Stock Exchange</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <MarketCard label="DSEX" quote={dseIndices.DSEX} />
          <MarketCard label="DS30" quote={dseIndices.DS30} />
          <MarketCard label="BEXIMCO" quote={dseQuotes.BEXIMCO} href="/terminal/equities/BEXIMCO" />
          <MarketCard label="GP" quote={dseQuotes.GP} href="/terminal/equities/GP" />
        </div>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wide text-base-500 mb-3">Bangladesh</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <MarketCard label="USD/BDT" quote={bdMacro.usdBdt} />
          <div className="border border-base-800 px-4 py-3">
            <div className="text-xs text-base-500 mb-1">Inflation (YoY)</div>
            <div className="font-mono text-lg mono-tab text-base-100">{bdMacro.inflationPct.toFixed(1)}%</div>
          </div>
          <div className="border border-base-800 px-4 py-3">
            <div className="text-xs text-base-500 mb-1">Policy Rate</div>
            <div className="font-mono text-lg mono-tab text-base-100">{bdMacro.policyRatePct.toFixed(1)}%</div>
          </div>
          <div className="border border-base-800 px-4 py-3">
            <div className="text-xs text-base-500 mb-1">FX Reserves</div>
            <div className="font-mono text-lg mono-tab text-base-100">${bdMacro.fxReservesUsdBn.toFixed(1)}bn</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wide text-base-500 mb-3">Global Markets</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <MarketCard label="S&P 500" quote={globalMarkets.SPX} />
          <MarketCard label="Nasdaq" quote={globalMarkets.NDX} />
          <MarketCard label="Nikkei 225" quote={globalMarkets.N225} />
          <MarketCard label="Hang Seng" quote={globalMarkets.HSI} />
          <MarketCard label="EUR/USD" quote={globalMarkets.EURUSD} />
          <MarketCard label="USD/JPY" quote={globalMarkets.USDJPY} />
          <MarketCard label="Gold" quote={globalMarkets.XAU} unit="/oz" />
          <MarketCard label="Brent Crude" quote={globalMarkets.BRENT} unit="/bbl" />
        </div>
      </section>

      <section>
        <h2 className="text-xs font-mono uppercase tracking-wide text-base-500 mb-3">Commodities → Bangladesh (preview)</h2>
        <div className="border border-base-800 px-4 py-3 text-sm text-base-400">
          Wheat (intl.){" "}
          <span className="text-base-100 font-mono">${commoditySnapshot.wheat.last}/MT</span> → Atta (BD wholesale){" "}
          <span className="text-base-100 font-mono">৳{commoditySnapshot.atta.last}/kg</span>
          <div className="text-xs text-base-600 mt-1">Full wheat → flour transmission model arrives in Phase 2.</div>
        </div>
      </section>
    </div>
  );
}
