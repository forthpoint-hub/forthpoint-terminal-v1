// Core data model. Every asset class extends `Instrument` rather than
// defining an unrelated shape, so new products (derivatives, ETFs, bonds)
// slot into the same UI components.

export type AssetClass =
  | "equity"
  | "bond"
  | "etf"
  | "derivative"
  | "commodity"
  | "fx"
  | "index";

export type Country = "BD" | "US" | "GLOBAL";

export interface Instrument {
  symbol: string;
  name: string;
  assetClass: AssetClass;
  exchange: string;
  country: Country;
  currency: string;
  sector?: string;
}

export interface OHLCV {
  date: string; // ISO date
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface Quote {
  symbol: string;
  last: number;
  change: number;
  changePct: number;
  volume?: number;
  asOf: string; // ISO datetime, demo timestamp
}

export interface Fundamentals {
  symbol: string;
  marketCap: number;
  pe?: number;
  pb?: number;
  eps?: number;
  dividendYield?: number;
  week52High: number;
  week52Low: number;
  roe?: number;
  roa?: number;
  debtToEquity?: number;
  revenueGrowthPct?: number;
  earningsGrowthPct?: number;
}

export interface WatchlistGroup {
  name: string;
  symbols: string[];
}

export const DATA_SOURCE_LABEL = "DEMO DATA — NOT LIVE MARKET DATA";
