import { useState, useEffect, useRef } from "react";
import { Zap, Hand, RotateCcw, TrendingUp } from "lucide-react";
import rugImg from "@/assets/infinite-rug-game.jpg";

export default function InfiniteRug() {
  const [betAmount, setBetAmount] = useState("0.1");
  const [playing, setPlaying] = useState(false);
  const [multiplier, setMultiplier] = useState(1.0);
  const [rugged, setRugged] = useState(false);
  const [cashedOut, setCashedOut] = useState(false);
  const [history, setHistory] = useState<{ mult: number; win: boolean }[]>([
    { mult: 2.34, win: true },
    { mult: 1.12, win: false },
    { mult: 5.67, win: true },
    { mult: 3.89, win: false },
  ]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (playing && !rugged && !cashedOut) {
      intervalRef.current = setInterval(() => {
        setMultiplier((m) => {
          const next = m + 0.03 + Math.random() * 0.05;
          if (Math.random() < 0.008 * m) {
            setRugged(true);
            setPlaying(false);
            setHistory((h) => [{ mult: parseFloat(m.toFixed(2)), win: false }, ...h.slice(0, 9)]);
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
    setHistory((h) => [{ mult: multiplier, win: true }, ...h.slice(0, 9)]);
  };

  const handleReset = () => {
    setPlaying(false);
    setMultiplier(1.0);
    setRugged(false);
    setCashedOut(false);
  };

  const getMultColor = () => {
    if (rugged) return "text-destructive";
    if (cashedOut) return "text-[hsl(var(--neon-green))]";
    if (multiplier > 3) return "text-[hsl(var(--neon-green))]";
    if (multiplier > 2) return "text-[hsl(var(--neon-purple))]";
    return "text-foreground";
  };

  const getGlowClass = () => {
    if (rugged) return "";
    if (cashedOut) return "neon-glow-green";
    if (multiplier > 2) return "neon-glow-purple";
    return "";
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative h-48 overflow-hidden">
        <img src={rugImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(260,20%,5%/0.5)] to-[hsl(260,20%,5%)]" />
        <div className="absolute bottom-0 left-0 px-8 pb-6 lg:px-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-purple))] animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-[hsl(var(--neon-purple))]">LIVE GAME</span>
          </div>
          <h1 className="font-display text-3xl font-black tracking-wider text-foreground lg:text-4xl">INFINITE RUG</h1>
          <p className="mt-1 text-sm text-muted-foreground">Watch the multiplier rise. Pull out before the rug.</p>
        </div>
      </div>

      <div className="px-8 py-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Main Display */}
          <div className={`relative flex flex-col items-center justify-center rounded-2xl border bg-card/60 backdrop-blur-sm p-16 transition-all duration-500 scanlines overflow-hidden ${
            rugged ? "border-destructive/30" : cashedOut ? "border-[hsl(var(--neon-green)/0.3)]" : "border-border"
          } ${getGlowClass()}`}>
            {/* Background pulse */}
            {playing && (
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-radial from-[hsl(var(--neon-purple)/0.2)] to-transparent animate-pulse" />
              </div>
            )}

            <p className="relative z-10 font-display text-xs font-bold tracking-[0.3em] text-muted-foreground mb-4">
              {rugged ? "💀 RUGGED" : cashedOut ? "💰 CASHED OUT" : playing ? "🔴 LIVE" : "MULTIPLIER"}
            </p>
            <p className={`relative z-10 font-mono text-8xl font-black tracking-tight transition-all duration-300 ${getMultColor()} ${
              !rugged && !cashedOut && playing && multiplier > 2 ? "neon-text-purple" : ""
            } ${cashedOut ? "neon-text-green" : ""}`}>
              {multiplier.toFixed(2)}x
            </p>

            {(rugged || cashedOut) && (
              <p className="relative z-10 mt-4 font-mono text-lg text-muted-foreground animate-fade-blur">
                {cashedOut
                  ? `Won ${(parseFloat(betAmount) * multiplier).toFixed(2)} SOL`
                  : "Better luck next time"
                }
              </p>
            )}

            {playing && (
              <div className="relative z-10 mt-8 w-64">
                <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full transition-all duration-100"
                    style={{
                      width: `${Math.min(multiplier * 12, 100)}%`,
                      background: `linear-gradient(90deg, hsl(145,100%,50%), hsl(270,80%,60%))`,
                    }}
                  />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>1.00x</span>
                  <span>DANGER →</span>
                </div>
              </div>
            )}

            {/* History strip */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-hidden">
              {history.slice(0, 8).map((h, i) => (
                <span
                  key={i}
                  className={`rounded-md px-2 py-1 font-mono text-[10px] font-bold ${
                    h.win ? "bg-[hsl(var(--neon-green)/0.1)] text-[hsl(var(--neon-green))]" : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {h.mult.toFixed(2)}x
                </span>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5">
              <label className="mb-3 block font-display text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
                BET AMOUNT (SOL)
              </label>
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                disabled={playing}
                className="w-full rounded-xl border border-border bg-muted px-4 py-3 font-mono text-lg font-bold text-foreground outline-none transition-all focus:border-[hsl(var(--neon-purple)/0.5)] disabled:opacity-50"
              />
              <div className="mt-3 grid grid-cols-4 gap-2">
                {["0.1", "0.5", "1.0", "5.0"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setBetAmount(v)}
                    disabled={playing}
                    className="rounded-lg bg-muted py-2 font-mono text-xs font-semibold text-muted-foreground transition-all hover:bg-[hsl(var(--neon-purple)/0.1)] hover:text-[hsl(var(--neon-purple))] disabled:opacity-50"
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {playing && (
              <div className="rounded-2xl border border-[hsl(var(--neon-purple)/0.3)] bg-[hsl(var(--neon-purple)/0.05)] p-5 neon-glow-purple animate-slide-up">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-4 w-4 text-[hsl(var(--neon-purple))]" />
                  <p className="font-display text-[10px] font-bold tracking-[0.2em] text-muted-foreground">POTENTIAL WIN</p>
                </div>
                <p className="font-mono text-3xl font-black text-[hsl(var(--neon-purple))] neon-text-purple">
                  {(parseFloat(betAmount) * multiplier).toFixed(2)} SOL
                </p>
              </div>
            )}

            {!playing && !rugged && !cashedOut ? (
              <button
                onClick={handleStart}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[hsl(var(--neon-purple))] py-4 font-display text-sm font-black tracking-widest text-white transition-all hover:brightness-110 active:scale-[0.97] neon-glow-purple"
              >
                <Zap className="h-5 w-5" /> START GAME
              </button>
            ) : playing ? (
              <button
                onClick={handleCashout}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[hsl(var(--neon-green))] py-4 font-display text-sm font-black tracking-widest text-black transition-all hover:brightness-110 active:scale-[0.97] neon-glow-green pulse-ring"
              >
                <Hand className="h-5 w-5" /> CASH OUT NOW
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[hsl(var(--neon-purple))] py-4 font-display text-sm font-black tracking-widest text-white transition-all hover:brightness-110 active:scale-[0.97] neon-glow-purple"
              >
                <RotateCcw className="h-5 w-5" /> PLAY AGAIN
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
