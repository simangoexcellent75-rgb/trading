/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#0A0A0B] text-white flex flex-col font-sans overflow-x-hidden">
      {/* Header */}
      <nav className="px-6 md:px-12 py-8 flex items-center justify-between border-b border-white/10">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
          STUN{" "}
          <span className="text-blue-500 underline decoration-2 underline-offset-4">
            TRADING
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/60">
          <a href="#" className="hover:text-white transition-colors">
            Trade-In
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Our Inventory
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Trust Score
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Support
          </a>
        </div>
        <button className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all">
          Start Appraisal
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col md:flex-row px-6 md:px-12 py-12 md:py-0">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-400">
              Live Rates: iPhone 15 Pro Max Up to $980
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] tracking-tight">
            The Elite Standard in <br className="hidden md:block" />
            <span className="font-serif italic text-blue-400">
              iPhone Exchange.
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-md leading-relaxed">
            Forget generic trade-ins. Get the highest conversion rates on your
            premium device with our 24-hour liquidity engine.
          </p>

          <div className="flex gap-8 md:gap-4 mt-4">
            <div className="flex flex-col border-l border-blue-500 pl-4">
              <span className="text-2xl font-bold">4.92/5</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                Trustpilot Score
              </span>
            </div>
            <div className="flex flex-col border-l border-white/20 pl-4">
              <span className="text-2xl font-bold">$12M+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                Paid to Users
              </span>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center mt-12 md:mt-0">
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
          {/* Mock iPhone Elements */}
          <div className="relative w-64 h-[500px] bg-neutral-900 rounded-[3rem] border-[6px] border-neutral-800 shadow-2xl flex flex-col overflow-hidden">
            <div className="h-8 w-1/3 bg-black mx-auto mt-4 rounded-full"></div>
            <div className="mt-12 px-6">
              <div className="h-4 w-24 bg-white/20 rounded mb-4"></div>
              <div className="h-32 w-full bg-white/10 rounded-2xl mb-6 flex flex-col items-center justify-center gap-2">
                <span className="text-3xl font-bold">$980</span>
                <span className="text-[10px] uppercase text-white/40 tracking-widest">
                  Instant Quote
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/5 rounded"></div>
                <div className="h-2 w-full bg-white/5 rounded"></div>
                <div className="h-2 w-2/3 bg-white/5 rounded"></div>
              </div>
              <div className="mt-12 h-10 w-full bg-blue-600 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info Grid */}
      <div className="md:h-48 border-t border-white/10 grid grid-cols-1 md:grid-cols-3">
        <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-2">
          <span className="text-blue-500 font-serif italic text-xl">
            01. Instant Quote
          </span>
          <p className="text-sm text-white/40">
            Get a real-time appraisal based on global market demand in under 60
            seconds.
          </p>
        </div>
        <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-2">
          <span className="text-blue-500 font-serif italic text-xl">
            02. Secure Logistics
          </span>
          <p className="text-sm text-white/40">
            Fully insured, overnight shipping kits delivered to your doorstep at
            zero cost.
          </p>
        </div>
        <div className="p-10 flex flex-col gap-2">
          <span className="text-blue-500 font-serif italic text-xl">
            03. Rapid Payout
          </span>
          <p className="text-sm text-white/40">
            Verified inspection to payment in your preferred crypto or bank
            account within 4 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
