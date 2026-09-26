import { Instrument, Quote, Fundamentals, OHLCV } from "@/types/instrument";

export const dseEquities: Instrument[] = [
  { symbol: "BEXIMCO", name: "Beximco Limited", assetClass: "equity", exchange: "DSE", country: "BD", currency: "BDT", sector: "Conglomerate" },
  { symbol: "SQURPHARMA", name: "Square Pharmaceuticals", assetClass: "equity", exchange: "DSE", country: "BD", currency: "BDT", sector: "Pharmaceuticals" },
  { symbol: "BATBC", name: "British American Tobacco Bangladesh", assetClass: "equity", exchange: "DSE", country: "BD", currency: "BDT", sector: "Tobacco" },
  { symbol: "GP", name: "Grameenphone Ltd.", assetClass: "equity", exchange: "DSE", country: "BD", currency: "BDT", sector: "Telecommunications" },
];

export const dseQuotes: Record<string, Quote> = {
  BEXIMCO: { symbol: "BEXIMCO", last: 142.3, change: 2.1, changePct: 1.5, volume: 3_812_400, asOf: "2026-09-25T14:30:00+06:00" },
  SQURPHARMA: { symbol: "SQURPHARMA", last: 218.6, change: -1.4, changePct: -0.64, volume: 1_204_900, asOf: "2026-09-25T14:30:00+06:00" },
  BATBC: { symbol: "BATBC", last: 512.8, change: 6.3, changePct: 1.24, volume: 402_100, asOf: "2026-09-25T14:30:00+06:00" },
  GP: { symbol: "GP", last: 289.4, change: -0.9, changePct: -0.31, volume: 895_600, asOf: "2026-09-25T14:30:00+06:00" },
};

export const dseFundamentals: Record<string, Fundamentals> = {
  BEXIMCO: { symbol: "BEXIMCO", marketCap: 41_200, pe: 14.2, pb: 1.1, eps: 10.02, dividendYield: 2.1, week52High: 168.9, week52Low: 96.4, roe: 8.4, roa: 3.1, debtToEquity: 1.42, revenueGrowthPct: 6.8, earningsGrowthPct: 4.2 },
  SQURPHARMA: { symbol: "SQURPHARMA", marketCap: 205_600, pe: 18.6, pb: 3.4, eps: 11.75, dividendYield: 1.8, week52High: 251.0, week52Low: 187.3, roe: 19.2, roa: 12.8, debtToEquity: 0.21, revenueGrowthPct: 9.4, earningsGrowthPct: 8.1 },
  BATBC: { symbol: "BATBC", marketCap: 599_300, pe: 21.4, pb: 9.8, eps: 23.96, dividendYield: 3.4, week52High: 561.2, week52Low: 402.5, roe: 44.6, roa: 21.3, debtToEquity: 0.38, revenueGrowthPct: 5.1, earningsGrowthPct: 3.6 },
  GP: { symbol: "GP", marketCap: 391_800, pe: 12.9, pb: 7.2, eps: 22.44, dividendYield: 6.9, week52High: 312.7, week52Low: 261.1, roe: 61.8, roa: 15.9, debtToEquity: 0.94, revenueGrowthPct: 3.9, earningsGrowthPct: 2.4 },
};

// Deterministic demo OHLCV generator — same shape every load, no randomness
// that would make screenshots or QA non-reproducible.
export function demoOHLCV(symbol: string, days = 180): OHLCV[] {
  let seed = Array.from(symbol).reduce((s, c) => s + c.charCodeAt(0), 0);
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const base = dseQuotes[symbol]?.last ?? 100;
  let price = base * 0.85;
  const out: OHLCV[] = [];
  const today = new Date("2026-09-25T00:00:00+06:00");
  for (let i = days; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const drift = (rand() - 0.48) * base * 0.02;
    const open = price;
    const close = Math.max(base * 0.5, open + drift);
    const high = Math.max(open, close) + rand() * base * 0.008;
    const low = Math.min(open, close) - rand() * base * 0.008;
    out.push({
      date: d.toISOString().slice(0, 10),
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2)),
      volume: Math.round(200_000 + rand() * 3_000_000),
    });
    price = close;
  }
  return out;
}
