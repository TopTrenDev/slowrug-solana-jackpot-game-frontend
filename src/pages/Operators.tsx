import { Users, TrendingUp, Shield, ArrowRight, Coins, Lock } from "lucide-react";

const stats = [
  { label: "Active Operators", value: "24", icon: Users, color: "text-primary", glow: "neon-glow-green" },
  { label: "Total Value Locked", value: "$142K", icon: Lock, color: "text-accent", glow: "neon-glow-gold" },
  { label: "Games Secured", value: "3,891", icon: Shield, color: "text-secondary", glow: "neon-glow-cyan" },
];

const operators = [
  { name: "SolVault Labs", stake: "45,200 SOL", games: 842, uptime: "99.8%", rank: 1 },
  { name: "DegenNode", stake: "28,500 SOL", games: 631, uptime: "99.5%", rank: 2 },
  { name: "ChainGuard", stake: "19,800 SOL", games: 418, uptime: "99.9%", rank: 3 },
  { name: "RiskPool DAO", stake: "12,300 SOL", games: 287, uptime: "98.7%", rank: 4 },
  { name: "NeonStake", stake: "8,700 SOL", games: 193, uptime: "99.1%", rank: 5 },
];

export default function Operators() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 sm:py-8 lg:px-12">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Coins className="h-5 w-5 text-secondary" />
          <span className="font-mono text-[10px] tracking-widest text-secondary uppercase">Staking Protocol</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-foreground lg:text-6xl">OPERATORS HUB</h1>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">Stake SOL, back the house, earn fees from every game played.</p>
      </div>

      <div className="mb-6 sm:mb-8 grid gap-3 grid-cols-1 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div key={s.label}
            className={`border border-border bg-card/60 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:translate-y-[-2px] ${s.glow} animate-slide-up`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <s.icon className={`mb-3 h-5 w-5 ${s.color}`} />
            <p className="font-mono text-2xl sm:text-3xl font-black text-foreground">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 sm:mb-8 border border-accent/30 bg-gradient-to-r from-accent/8 to-transparent p-5 sm:p-8 neon-glow-gold">
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-foreground">BECOME AN OPERATOR</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              Stake SOL to back the house and earn a share of fees from every game played on the protocol.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 bg-accent px-8 py-3.5 text-sm font-semibold tracking-widest text-accent-foreground transition-all hover:brightness-110 active:scale-[0.97] shrink-0 uppercase w-full sm:w-auto"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            Stake Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile: cards, Desktop: table */}
      <div className="border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
        <div className="flex items-center gap-3 border-b border-border px-4 sm:px-6 py-4">
          <TrendingUp className="h-4 w-4 text-primary" />
          <h2 className="font-display text-xl text-foreground">TOP OPERATORS</h2>
        </div>

        {/* Mobile cards */}
        <div className="sm:hidden divide-y divide-border/30">
          {operators.map((op) => (
            <div key={op.name} className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`flex h-7 w-7 items-center justify-center font-mono text-xs font-bold ${
                    op.rank <= 3 ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    {op.rank}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{op.name}</span>
                </div>
                <span className={`font-mono text-sm font-bold ${parseFloat(op.uptime) >= 99.5 ? "text-primary" : "text-secondary"}`}>
                  {op.uptime}
                </span>
              </div>
              <div className="flex items-center gap-4 pl-10">
                <span className="font-mono text-xs text-muted-foreground">{op.stake}</span>
                <span className="font-mono text-xs text-muted-foreground">{op.games.toLocaleString()} games</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <table className="hidden sm:table w-full">
          <thead>
            <tr className="border-b border-border">
              {["#", "Operator", "Stake", "Games", "Uptime"].map((h) => (
                <th key={h} className="px-6 py-3 text-left font-mono text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {operators.map((op) => (
              <tr key={op.name} className="border-b border-border/30 transition-colors hover:bg-muted/20">
                <td className="px-6 py-4">
                  <span className={`flex h-7 w-7 items-center justify-center font-mono text-xs font-bold ${
                    op.rank <= 3 ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                  }`}>
                    {op.rank}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-foreground">{op.name}</td>
                <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{op.stake}</td>
                <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{op.games.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={`font-mono text-sm font-bold ${parseFloat(op.uptime) >= 99.5 ? "text-primary" : "text-secondary"}`}>
                    {op.uptime}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
