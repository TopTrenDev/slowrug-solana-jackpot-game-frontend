import { useState } from "react";
import { ArrowUp, Zap } from "lucide-react";

const LEVELS = 10;

export default function Tower() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [betAmount, setBetAmount] = useState("0.1");
  const [playing, setPlaying] = useState(false);
  const multiplier = (1 + currentLevel * 0.4).toFixed(1);

  const handleStart = () => {
    setPlaying(true);
    setCurrentLevel(0);
  };

  const handleClimb = () => {
    if (currentLevel < LEVELS) {
      setCurrentLevel((l) => l + 1);
    }
  };

  const handleCashout = () => {
    setPlaying(false);
    setCurrentLevel(0);
  };

  return (
    <div className="min-h-screen px-6 py-8 lg:px-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">The Tower</h1>
        <p className="mt-1 text-muted-foreground">Climb higher, multiply bigger. Cash out before collapse.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Tower visualization */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex flex-col-reverse gap-2">
            {Array.from({ length: LEVELS }, (_, i) => i + 1).map((level) => (
              <div
                key={level}
                className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 ${
                  level <= currentLevel
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : level === currentLevel + 1 && playing
                      ? "border-border bg-secondary/50 text-foreground animate-pulse"
                      : "border-border/50 bg-secondary/20 text-muted-foreground"
                }`}
              >
                <span className="font-mono text-sm font-medium">Level {level}</span>
                <span className="font-mono text-sm">{(1 + level * 0.4).toFixed(1)}x</span>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Bet Amount (SOL)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                disabled={playing}
                className="flex-1 rounded-lg border border-border bg-secondary px-3 py-2.5 font-mono text-sm text-foreground outline-none transition-colors focus:border-primary disabled:opacity-50"
              />
              <button
                onClick={() => setBetAmount((v) => (parseFloat(v) * 2).toString())}
                disabled={playing}
                className="rounded-lg border border-border bg-secondary px-3 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
              >
                2x
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              {["0.1", "0.5", "1.0", "2.0"].map((v) => (
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
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 glow-green">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Current Multiplier</p>
              <p className="mt-1 font-mono text-3xl font-bold text-primary">{multiplier}x</p>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                Potential: {(parseFloat(betAmount) * parseFloat(multiplier)).toFixed(2)} SOL
              </p>
            </div>
          )}

          {!playing ? (
            <button
              onClick={handleStart}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.97]"
            >
              <Zap className="h-4 w-4" />
              Start Game
            </button>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleClimb}
                disabled={currentLevel >= LEVELS}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.97] disabled:opacity-50"
              >
                <ArrowUp className="h-4 w-4" />
                Climb
              </button>
              <button
                onClick={handleCashout}
                className="flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary/20 active:scale-[0.97]"
              >
                Cash Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
