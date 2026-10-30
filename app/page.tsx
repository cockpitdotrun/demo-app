export default function Home() {
  const ticks = [0, 100, 200, 300, 400, 500];

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col justify-between selection:bg-amber-100">
      {/* Header / Navigation */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-3xl font-bold tracking-tight text-black font-sans lowercase">
            amble
          </span>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-9 text-[15px] text-neutral-800 font-medium">
          <a href="#weight-loss" className="hover:text-black transition-colors">
            Weight loss
          </a>
          <button className="flex items-center gap-1.5 hover:text-black transition-colors">
            <span>Anti aging</span>
            <svg
              className="w-3.5 h-3.5 text-neutral-600 stroke-[2.2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <a href="#skin" className="hover:text-black transition-colors">
            Skin
          </a>
        </nav>

        {/* Login Button */}
        <div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 text-neutral-900 text-sm font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-xs">
            <svg
              className="w-4 h-4 text-neutral-700 stroke-[1.8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-8 sm:pt-12 pb-16 flex-1 flex flex-col justify-center">
        {/* Category Label */}
        <div className="mb-4">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">
            RESULTS
          </span>
        </div>

        {/* Headings Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14 sm:mb-20">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-950 leading-[1.15]">
              Doctor-trusted treatments <br />
              Growth for you
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-md">
              Boost energy, sharpen focus, support cellular health, and become
              your healthiest self with one of the most powerful ways to restore
              NAD+ as you age.
            </p>
          </div>
        </div>

        {/* Graph & Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          {/* Big Stat '6x' */}
          <div className="lg:col-span-4 flex items-end">
            <span className="text-[120px] sm:text-[160px] md:text-[200px] leading-none font-light tracking-tighter text-neutral-950 -mb-4">
              6x
            </span>
          </div>

          {/* Chart Container */}
          <div className="lg:col-span-8 w-full pt-4">
            <div className="relative w-full">
              {/* Vertical Grid Lines across background */}
              <div className="absolute inset-0 flex justify-between pointer-events-none">
                {ticks.map((tick) => (
                  <div
                    key={tick}
                    className="h-full w-px bg-neutral-200/90 relative"
                  />
                ))}
              </div>

              {/* Bars container */}
              <div className="relative z-10 flex flex-col gap-9 pb-12 pt-4">
                {/* Bar 1: Diet Only */}
                <div>
                  <div className="text-sm font-medium text-neutral-900 mb-2.5">
                    Diet Only
                  </div>
                  <div
                    className="h-14 sm:h-16 w-[18%] rounded-none relative border border-dashed border-neutral-300"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 2px, transparent 2px, transparent 8px)",
                    }}
                  />
                </div>

                {/* Bar 2: GLP1 Treatment */}
                <div>
                  <div className="text-sm font-medium text-neutral-900 mb-2.5">
                    GLP1 Treatment
                  </div>
                  <div
                    className="h-14 sm:h-16 w-[88%] shadow-xs transition-all duration-700"
                    style={{
                      background:
                        "linear-gradient(90deg, #5956d6 0%, #7b61ff 6%, #a855f7 15%, #d946ef 24%, #f97316 45%, #f59e0b 68%, #fbbf24 85%, #f97316 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Ticks Labels along bottom */}
              <div className="relative w-full flex justify-between text-xs sm:text-sm text-neutral-700 font-medium">
                {ticks.map((tick) => (
                  <div key={tick} className="w-0 flex justify-center">
                    <span>{tick}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
