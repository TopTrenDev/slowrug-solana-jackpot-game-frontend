import { useState } from "react";
import { ArrowUp, Zap, Trophy, RotateCcw } from "lucide-react";
import towerImg from "@/assets/tower-game.jpg";

const LEVELS = 10;

export default function Tower() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [betAmount, setBetAmount] = useState("0.1");
  const [playing, setPlaying] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const multiplier = (1 + currentLevel * 0.4).toFixed(1);

  const handleStart = () => { setPlaying(true); setCurrentLevel(0); setCrashed(false); };
  const handleClimb = () => {
    if (Math.random() < currentLevel * 0.08) { setCrashed(true); setPlaying(false); return; }
    if (currentLevel < LEVELS) setCurrentLevel((l) => l + 1);
  };
  const handleCashout = () => setPlaying(false);
  const handleReset = () => { setPlaying(false); setCurrentLevel(0); setCrashed(false); };

  return (
    <div className="min-h-screen">
      <div className="relative h-48 overflow-hidden">
        <img src={towerImg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="absolute bottom-0 left-0 px-8 pb-6 lg:px-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-primary uppercase">Live Game</span>
          </div>
          <h1 className="font-display text-5xl text-foreground lg:text-6xl">THE TOWER</h1>
          <p className="mt-1 text-sm text-muted-foreground">Climb higher. Multiply bigger. Cash out before collapse.</p>
        </div>
      </div>

      <div className="px-8 py-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Tower Visualization */}
          <div className="border border-border bg-card/60 backdrop-blur-sm p-6 scanlines relative overflow-hidden">
            {crashed && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-blur">
                <span className="font-display text-6xl text-destructive neon-text-purple mb-2">COLLAPSED!</span>
                <p className="font-mono text-sm text-muted-foreground mb-4">Tower fell at level {currentLevel}</p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold tracking-wider text-primary-foreground hover:brightness-110 active:scale-[0.97] uppercase"
                >
                  <RotateCcw className="h-4 w-4" /> Try Again
                </button>
              </div>
            )}
            <div className="flex flex-col-reverse gap-2">
              {Array.from({ length: LEVELS }, (_, i) => i + 1).map((level) => {
                const isCleared = level <= currentLevel;
                const isNext = level === currentLevel + 1 && playing;
                return (
                  <div
                    key={level}
                    className={`relative flex items-center justify-between border px-5 py-3.5 transition-all duration-500 ${
                      isCleared
                        ? "border-primary/40 bg-primary/8 neon-border-green"
                        : isNext
                          ? "border-secondary/40 bg-secondary/5 animate-pulse"
                          : "border-border/30 bg-muted/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-7 w-7 items-center justify-center font-mono text-xs font-bold ${
                        isCleared ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {level}
                      </span>
                      <span className={`font-medium text-sm tracking-wide ${isCleared ? "text-primary" : "text-muted-foreground"}`}>
                        Level {level}
                      </span>
                    </div>
                    <span className={`font-mono text-sm font-bold ${isCleared ? "text-primary neon-text-green" : "text-muted-foreground"}`}>
                      {(1 + level * 0.4).toFixed(1)}x
                    </span>
                    {isCleared && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <Trophy className="h-4 w-4 text-primary/30" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-4">
            <div className="border border-border bg-card/60 backdrop-blur-sm p-5">
              <label className="mb-3 block font-mono text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Bet Amount (SOL)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  disabled={playing}
                  className="flex-1 border border-border bg-muted px-4 py-3 font-mono text-lg font-bold text-foreground outline-none transition-all focus:border-primary/50 disabled:opacity-50"
                />
                <button
                  onClick={() => setBetAmount((v) => (parseFloat(v) * 2).toString())}
                  disabled={playing}
                  className="border border-border bg-muted px-4 font-mono text-xs font-bold text-muted-foreground transition-all hover:text-foreground hover:border-foreground/20 disabled:opacity-50"
                >
                  2X
                </button>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {["0.1", "0.5", "1.0", "2.0"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setBetAmount(v)}
                    disabled={playing}
                    className="bg-muted py-2 font-mono text-xs font-semibold text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary disabled:opacity-50"
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {playing && !crashed && (
              <div className="border border-primary/30 bg-primary/5 p-6 neon-glow-green animate-slide-up">
                <p className="font-mono text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Multiplier</p>
                <p className="mt-1 font-mono text-5xl font-black text-primary neon-text-green">{multiplier}x</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-mono text-sm text-muted-foreground">Potential win</span>
                  <span className="font-mono text-lg font-bold text-foreground">{(parseFloat(betAmount) * parseFloat(multiplier)).toFixed(2)} SOL</span>
                </div>
              </div>
            )}

            {!playing && !crashed ? (
              <button
                onClick={handleStart}
                className="flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm font-semibold tracking-widest text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] neon-glow-green uppercase"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
              >
                <Zap className="h-5 w-5" /> Start Game
              </button>
            ) : playing ? (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleClimb}
                  disabled={currentLevel >= LEVELS}
                  className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-semibold tracking-widest text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] disabled:opacity-50 uppercase"
                >
                  <ArrowUp className="h-5 w-5" /> Climb
                </button>
                <button
                  onClick={handleCashout}
                  className="flex items-center justify-center gap-2 border-2 border-secondary/50 bg-secondary/10 py-4 text-sm font-semibold tracking-widest text-secondary transition-all hover:bg-secondary/20 active:scale-[0.97] uppercase"
                >
                  Cash Out
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
