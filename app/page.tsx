import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-base-950 text-base-100 flex flex-col">
      <header className="border-b border-base-800 px-6 py-5 flex items-center justify-between">
        <span className="font-mono text-sm tracking-tight text-base-300">FORTHPOINT</span>
        <nav className="hidden sm:flex gap-6 text-sm text-base-400">
          <span>Markets</span>
          <span>Research</span>
          <span>About</span>
        </nav>
      </header>

      <section className="flex-1 flex flex-col justify-center px-6 max-w-3xl mx-auto text-center py-24">
        <p className="font-mono text-xs text-[#c98a3e] mb-6">
          FACTS. FOCUS. FORESIGHT. FORTUNE.
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] mb-6">
          ForthPoint Terminal
        </h1>
        <p className="text-base-300 text-lg mb-2">
          Bangladesh-first. Multi-asset. Research-driven.
        </p>
        <p className="text-base-400 max-w-xl mx-auto mb-10 leading-relaxed">
          A market intelligence and trading infrastructure built to connect data,
          research, risk and decision-making across Bangladesh and global markets.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/terminal"
            className="px-5 py-2.5 bg-base-100 text-base-950 text-sm font-medium hover:bg-white transition-colors"
          >
            Enter Terminal
          </Link>
          <Link
            href="/terminal"
            className="px-5 py-2.5 border border-base-700 text-sm text-base-300 hover:border-base-500 transition-colors"
          >
            Explore Markets
          </Link>
        </div>
      </section>

      <footer className="border-t border-base-800 px-6 py-4 text-center text-xs text-base-500 font-mono">
        DEMO DATA — NOT LIVE MARKET DATA
      </footer>
    </main>
  );
}
