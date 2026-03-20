import { DollarSign, Hash, Trophy, ArrowRight, Gamepad2, Infinity } from "lucide-react";
import StatCard from "@/components/home/StatCard";
import RecentPlayers from "@/components/home/RecentPlayers";
import { Link } from "react-router-dom";

const games = [
  {
    title: "The Tower",
    description: "Climb the tower, multiplying your bet at each level. Cash out before it collapses.",
    path: "/tower",
    icon: Gamepad2,
    accent: "from-primary/20 to-primary/5",
    borderAccent: "hover:border-primary/30",
  },
  {
    title: "Infinite Rug",
    description: "A multiplier that keeps rising — pull out before the rug gets pulled.",
    path: "/infinite-rug",
    icon: Infinity,
    accent: "from-accent/20 to-accent/5",
    borderAccent: "hover:border-accent/30",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen px-6 py-8 lg:px-10">
      {/* Hero */}
      <section className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary via-card to-secondary p-8 lg:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl" style={{ lineHeight: '1.1' }}>
            Play. Win.<br />
            <span className="text-gradient">On-chain.</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground" style={{ textWrap: 'pretty' }}>
            Provably fair Solana jackpot games with instant payouts. Connect your wallet and start playing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {games.map((g) => (
              <Link
                key={g.path}
                to={g.path}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.97]"
              >
                {g.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground/70">Statistics</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard icon={DollarSign} value="$12,847" label="Amount Wagered" />
          <StatCard icon={Hash} value="1,293" label="Bets Placed All Time" accentClass="text-accent" />
          <StatCard icon={Trophy} value="$8,412" label="Total Wins" accentClass="text-[hsl(var(--chart-3))]" />
        </div>
      </section>

      {/* Games Grid */}
      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground/70">Games</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {games.map((g) => (
            <Link
              key={g.path}
              to={g.path}
              className={`group rounded-xl border border-border bg-gradient-to-br ${g.accent} p-6 transition-all duration-300 ${g.borderAccent} hover:shadow-lg`}
            >
              <g.icon className="mb-3 h-8 w-8 text-foreground" />
              <h3 className="text-lg font-semibold text-foreground">{g.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                Play now <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Players */}
      <section>
        <RecentPlayers />
      </section>
    </div>
  );
}
