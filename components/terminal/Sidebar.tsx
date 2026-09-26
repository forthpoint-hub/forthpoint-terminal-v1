"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SECTIONS: { label: string; href: string; disabled?: boolean }[] = [
  { label: "Dashboard", href: "/terminal" },
  { label: "Equities", href: "/terminal/equities/BEXIMCO" },
  { label: "Watchlists", href: "/terminal/watchlist" },
  { label: "Fixed Income", href: "#", disabled: true },
  { label: "ETFs", href: "#", disabled: true },
  { label: "Derivatives", href: "#", disabled: true },
  { label: "Commodities", href: "#", disabled: true },
  { label: "FX", href: "#", disabled: true },
  { label: "Global Markets", href: "#", disabled: true },
  { label: "Research", href: "#", disabled: true },
  { label: "Portfolio", href: "#", disabled: true },
  { label: "Risk", href: "#", disabled: true },
  { label: "Trading Lab", href: "#", disabled: true },
  { label: "Data Explorer", href: "#", disabled: true },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-56 shrink-0 flex-col border-r border-base-800 bg-base-950">
      <div className="px-5 py-4 border-b border-base-800">
        <Link href="/" className="font-mono text-sm tracking-tight text-base-100">
          FORTHPOINT
        </Link>
      </div>
      <nav className="flex-1 py-3 overflow-y-auto">
        {SECTIONS.map((s) => {
          const active = pathname === s.href || (s.href !== "/terminal" && pathname.startsWith(s.href) && s.href !== "#");
          return (
            <Link
              key={s.label}
              href={s.href}
              aria-disabled={s.disabled}
              className={[
                "block px-5 py-2 text-sm border-l-2 transition-colors",
                s.disabled
                  ? "text-base-600 border-transparent cursor-default pointer-events-none"
                  : active
                  ? "text-base-100 border-[#c98a3e] bg-base-900"
                  : "text-base-400 border-transparent hover:text-base-200 hover:bg-base-900",
              ].join(" ")}
            >
              {s.label}
              {s.disabled && <span className="ml-2 text-[10px] text-base-600 font-mono">PHASE 2+</span>}
            </Link>
          );
        })}
      </nav>
      <div className="px-5 py-3 border-t border-base-800 text-[10px] text-base-600 font-mono leading-relaxed">
        DEMO DATA
        <br />
        NOT LIVE MARKET DATA
      </div>
    </aside>
  );
}
