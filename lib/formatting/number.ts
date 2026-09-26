export function formatPrice(n: number, currency?: string): string {
  const s = n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return currency ? `${s}` : s;
}

export function formatChange(change: number, changePct: number): string {
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)} (${sign}${changePct.toFixed(2)}%)`;
}

export function formatCompact(n: number): string {
  if (Math.abs(n) >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toString();
}

export function formatCrore(n: number): string {
  return `৳${n.toLocaleString("en-US", { maximumFractionDigits: 0 })} cr`;
}
