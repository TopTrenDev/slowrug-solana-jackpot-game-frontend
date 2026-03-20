import { Users, TrendingUp, Shield, ArrowRight } from "lucide-react";

const stats = [
  { label: "Active Operators", value: "24", icon: Users },
  { label: "TVL", value: "$142K", icon: TrendingUp },
  { label: "Games Secured", value: "3,891", icon: Shield },
];

const operators = [
  { name: "SolVault Labs", stake: "45,200 SOL", games: 842, uptime: "99.8%" },
  { name: "DegenNode", stake: "28,500 SOL", games: 631, uptime: "99.5%" },
  { name: "ChainGuard", stake: "19,800 SOL", games: 418, uptime: "99.9%" },
  { name: "RiskPool DAO", stake: "12,300 SOL", games: 287, uptime: "98.7%" },
];

export default function Operators() {
  return (
    <div className="min-h-screen px-6 py-8 lg:px-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Operators Hub</h1>
        <p className="mt-1 text-muted-foreground">Stake SOL, back games, earn fees. Become a house operator.</p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <s.icon className="mb-2 h-5 w-5 text-accent" />
            <p className="font-mono text-2xl font-semibold text-foreground">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mb-8 rounded-xl border border-accent/20 bg-gradient-to-r from-accent/10 to-transparent p-6">
        <h2 className="text-lg font-semibold text-foreground">Become an Operator</h2>
        <p className="mt-1 text-sm text-muted-foreground">Stake SOL to back the house and earn a share of fees from every game played.</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 active:scale-[0.97]">
          Stake Now <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Operators List */}
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold text-foreground">Top Operators</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Operator</th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Stake</th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Games Backed</th>
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Uptime</th>
              </tr>
            </thead>
            <tbody>
              {operators.map((op) => (
                <tr key={op.name} className="border-b border-border/50 transition-colors last:border-0 hover:bg-secondary/40">
                  <td className="px-6 py-3.5 text-sm font-medium text-foreground">{op.name}</td>
                  <td className="px-6 py-3.5 font-mono text-sm text-muted-foreground">{op.stake}</td>
                  <td className="px-6 py-3.5 font-mono text-sm text-muted-foreground">{op.games.toLocaleString()}</td>
                  <td className="px-6 py-3.5">
                    <span className={`font-mono text-sm ${parseFloat(op.uptime) >= 99.5 ? "text-primary" : "text-[hsl(var(--chart-3))]"}`}>
                      {op.uptime}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
