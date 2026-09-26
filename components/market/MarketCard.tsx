import Link from "next/link";
import { Quote } from "@/types/instrument";

export default function MarketCard({
  label,
  quote,
  href,
  unit,
}: {
  label: string;
  quote: Quote;
  href?: string;
  unit?: string;
}) {
  const up = quote.change >= 0;
  const content = (
    <div className="border border-base-800 px-4 py-3 hover:border-base-600 transition-colors">
      <div className="text-xs text-base-500 mb-1">{label}</div>
      <div className="font-mono text-lg mono-tab text-base-100">
        {quote.last.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        {unit && <span className="text-xs text-base-500 ml-1">{unit}</span>}
      </div>
      <div className={`font-mono text-xs mono-tab ${up ? "text-signal-up" : "text-signal-down"}`}>
        {up ? "+" : ""}
        {quote.change.toFixed(2)} ({up ? "+" : ""}
        {quote.changePct.toFixed(2)}%)
      </div>
    </div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
}
