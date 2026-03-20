import { useState, useEffect, useRef } from "react";
import { Zap, Hand } from "lucide-react";

export default function InfiniteRug() {
  const [betAmount, setBetAmount] = useState("0.1");
  const [playing, setPlaying] = useState(false);
  const [multiplier, setMultiplier] = useState(1.0);
  const [rugged, setRugged] = useState(false);
  const [cashedOut, setCashedOut] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (playing && !rugged && !cashedOut) {
      intervalRef.current = setInterval(() => {
        setMultiplier((m) => {
          const next = m + 0.03 + Math.random() * 0.05;
          // Random rug chance increases with multiplier
          if (Math.random() < 0.008 * m) {
            setRugged(true);
            setPlaying(false);
            return m;
          }
          return parseFloat(next.toFixed(2));
        });
      }, 100);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [playing, rugged, cashedOut]);

  const handleStart = () => {
    setPlaying(true);
    setMultiplier(1.0);
    setRugged(false);
    setCashedOut(false);
  };

  const handleCashout = () => {
    setCashedOut(true);
    setPlaying(false);
  };

  const handleReset = () => {
    setPlaying(false);
    setMultiplier(1.0);
    setRugged(false);
    setCashedOut(false);
  };

  return (
    <div className="min-h-screen px-6 py-8 lg:px-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Infinite Rug</h1>
        <p className="mt-1 text-muted-foreground">Watch the multiplier rise. Pull out before the rug.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Multiplier Display */}
        <div className={`flex flex-col items-center justify-center rounded-xl border bg-card p-12 transition-all duration-300 ${
          rugged ? "border-destructive/30 glow-purple" : cashedOut ? "border-primary/30 glow-green" : "border-border"
        }`}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {rugged ? "RUGGED!" : cashedOut ? "CASHED OUT" : playing ? "LIVE" : "MULTIPLIER"}
          </p>
          <p className={`font-mono text-7xl font-bold tracking-tight transition-colors ${
            rugged ? "text-destructive" : cashedOut ? "text-primary" : "text-foreground"
          }`}>
            {multiplier.toFixed(2)}x
          </p>
          {(rugged || cashedOut) && (
            <p className="mt-3 font-mono text-lg text-muted-foreground">
              {cashedOut
                ? `Won ${(parseFloat(betAmount) * multiplier).toFixed(2)} SOL`
                : "Better luck next time"
              }
            </p>
          )}
          {playing && (
            <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-secondary">
              <div className="h-full animate-pulse rounded-full bg-primary" style={{ width: `${Math.min(multiplier * 15, 100)}%` }} />
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Bet Amount (SOL)
            </label>
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(e.target.value)}
              disabled={playing}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary disabled:opacity-50"
            />
            <div className="mt-3 flex gap-2">
              {["0.1", "0.5", "1.0", "5.0"].map((v) => (
                <button
                  key={v}
                  onClick={() => setBetAmount(v)}
                  disabled={playing}
                  className="flex-1 rounded-md bg-secondary py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {playing && (
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Potential Win</p>
              <p className="mt-1 font-mono text-2xl font-bold text-primary">
                {(parseFloat(betAmount) * multiplier).toFixed(2)} SOL
              </p>
            </div>
          )}

          {!playing && !rugged && !cashedOut ? (
            <button
              onClick={handleStart}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.97]"
            >
              <Zap className="h-4 w-4" />
              Start Game
            </button>
          ) : playing ? (
            <button
              onClick={handleCashout}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[hsl(var(--chart-3))] py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.97]"
            >
              <Hand className="h-4 w-4" />
              Cash Out Now!
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.97]"
            >
              Play Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
