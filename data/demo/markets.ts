import { Quote } from "@/types/instrument";

export const dseIndices: Record<string, Quote> = {
  DSEX: { symbol: "DSEX", last: 5482.16, change: 34.2, changePct: 0.63, asOf: "2026-09-25T14:30:00+06:00" },
  DS30: { symbol: "DS30", last: 1986.4, change: -6.1, changePct: -0.31, asOf: "2026-09-25T14:30:00+06:00" },
};

export const bdMacro = {
  usdBdt: { symbol: "USD/BDT", last: 119.4, change: 0.15, changePct: 0.13, asOf: "2026-09-25T14:30:00+06:00" },
  inflationPct: 8.9,
  policyRatePct: 10.0,
  fxReservesUsdBn: 21.4,
};

export const globalMarkets: Record<string, Quote> = {
  SPX: { symbol: "S&P 500", last: 6142.8, change: 18.4, changePct: 0.3, asOf: "2026-09-25T15:30:00-04:00" },
  NDX: { symbol: "Nasdaq", last: 21_034.5, change: -42.1, changePct: -0.2, asOf: "2026-09-25T15:30:00-04:00" },
  N225: { symbol: "Nikkei 225", last: 39_812.0, change: 210.6, changePct: 0.53, asOf: "2026-09-25T15:00:00+09:00" },
  HSI: { symbol: "Hang Seng", last: 18_640.2, change: -88.4, changePct: -0.47, asOf: "2026-09-25T16:00:00+08:00" },
  EURUSD: { symbol: "EUR/USD", last: 1.0842, change: 0.0021, changePct: 0.19, asOf: "2026-09-25T15:30:00-04:00" },
  USDJPY: { symbol: "USD/JPY", last: 148.62, change: -0.34, changePct: -0.23, asOf: "2026-09-25T15:30:00-04:00" },
  XAU: { symbol: "Gold", last: 2648.3, change: 12.6, changePct: 0.48, asOf: "2026-09-25T15:30:00-04:00" },
  BRENT: { symbol: "Brent Crude", last: 74.12, change: -0.58, changePct: -0.78, asOf: "2026-09-25T15:30:00-04:00" },
  WTI: { symbol: "WTI Crude", last: 70.35, change: -0.51, changePct: -0.72, asOf: "2026-09-25T15:30:00-04:00" },
};

export const commoditySnapshot = {
  wheat: { symbol: "Wheat (Intl.)", last: 612.5, unit: "USD/MT", change: 4.2, changePct: 0.69 },
  atta: { symbol: "Atta (BD Wholesale)", last: 58.4, unit: "BDT/kg", change: 0.3, changePct: 0.52 },
};
