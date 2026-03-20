import { DollarSign, Hash, Trophy, ArrowRight, Gamepad2, Infinity, ExternalLink, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import towerImg from "@/assets/tower-game.jpg";
import rugImg from "@/assets/infinite-rug-game.jpg";

const stats = [
  { icon: DollarSign, value: "$12,847", label: "Amount Wagered", glow: "neon-glow-green", color: "text-[hsl(var(--neon-green))]" },
  { icon: Hash, value: "1,293", label: "Bets Placed", glow: "neon-glow-purple", color: "text-[hsl(var(--neon-purple))]" },
  { icon: Trophy, value: "$8,412", label: "Total Wins", glow: "neon-glow-green", color: "text-[hsl(var(--neon-green))]" },
];

const games = [
  {
    title: "THE TOWER",
    desc: "Climb the tower, multiplying your bet at each level. Cash out before it collapses.",
    path: "/tower",
    icon: Gamepad2,
    img: towerImg,
    borderClass: "neon-border-green",
    tagColor: "bg-[hsl(var(--neon-green)/0.15)] text-[hsl(var(--neon-green))]",
  },
  {
    title: "INFINITE RUG",
    desc: "Watch the multiplier climb. Pull out before the rug gets pulled beneath you.",
    path: "/infinite-rug",
    icon: Infinity,
    img: rugImg,
    borderClass: "neon-border-purple",
    tagColor: "bg-[hsl(var(--neon-purple)/0.15)] text-[hsl(var(--neon-purple))]",
  },
];

const recentPlayers = [
  { game: "Tower", wallet: "7xKp...3mNv", bet: "2.5 SOL", payout: "5.2 SOL", win: true },
  { game: "Rug", wallet: "9aHb...7zRw", bet: "1.0 SOL", payout: "0 SOL", win: false },
  { game: "Tower", wallet: "3fWd...9qYe", bet: "0.5 SOL", payout: "1.8 SOL", win: true },
  { game: "Rug", wallet: "5mCt...2kXa", bet: "3.0 SOL", payout: "7.4 SOL", win: true },
  { game: "Tower", wallet: "1rEg...4pUv", bet: "0.8 SOL", payout: "0 SOL", win: false },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBanner} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(260,20%,5%/0.3)] via-[hsl(260,20%,5%/0.6)] to-[hsl(260,20%,5%)]" />
        </div>
        <div className="relative z-10 px-8 pb-16 pt-20 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-green))] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[hsl(var(--neon-green))]">PROVABLY FAIR • ON-CHAIN</span>
          </div>
          <h1 className="font-display text-5xl font-black tracking-wider text-foreground lg:text-7xl" style={{ lineHeight: '1.05' }}>
            PLAY.<br />
            <span className="text-[hsl(var(--neon-green))] neon-text-green">WIN.</span><br />
            <span className="text-[hsl(var(--neon-purple))] neon-text-purple">REPEAT.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg font-medium text-foreground/60">
            Solana-powered jackpot games with instant payouts, verifiable randomness, and zero middlemen.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/tower"
              className="group inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--neon-green))] px-6 py-3 font-display text-sm font-bold tracking-wider text-black transition-all hover:brightness-110 active:scale-[0.97] neon-glow-green"
            >
              <Zap className="h-4 w-4" />
              PLAY NOW
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/operators"
              className="inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--neon-purple)/0.4)] bg-[hsl(var(--neon-purple)/0.1)] px-6 py-3 font-display text-sm font-bold tracking-wider text-[hsl(var(--neon-purple))] transition-all hover:bg-[hsl(var(--neon-purple)/0.2)] active:scale-[0.97]"
            >
              BECOME OPERATOR
            </Link>
          </div>
        </div>
      </section>

      <div className="px-8 lg:px-12">
        {/* Stats */}
        <section className="relative -mt-4 mb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-xl border border-border bg-card/80 backdrop-blur-sm p-5 transition-all duration-300 hover:scale-[1.02] ${s.glow} animate-slide-up`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-muted ${s.color}`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                  <TrendingUp className="h-4 w-4 text-[hsl(var(--neon-green))]" />
                </div>
                <p className="font-mono text-3xl font-bold tracking-tight text-foreground">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Games */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Gamepad2 className="h-5 w-5 text-[hsl(var(--neon-green))]" />
            <h2 className="font-display text-sm font-bold tracking-[0.2em] text-muted-foreground">GAMES</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {games.map((g) => (
              <Link
                key={g.path}
                to={g.path}
                className={`group relative overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:scale-[1.02] ${g.borderClass}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={g.img} alt={g.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <span className={`absolute top-4 left-4 rounded-full px-3 py-1 font-mono text-[10px] font-bold tracking-widest ${g.tagColor}`}>
                    LIVE
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <g.icon className="h-5 w-5 text-foreground" />
                    <h3 className="font-display text-lg font-bold tracking-wider text-foreground">{g.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{g.desc}</p>
                  <span className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-wider text-[hsl(var(--neon-green))] transition-all group-hover:gap-3">
                    PLAY NOW <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Players */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-green))] animate-pulse" />
            <h2 className="font-display text-sm font-bold tracking-[0.2em] text-muted-foreground">RECENT PLAYS</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Game", "Wallet", "Bet", "Payout", "TX"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left font-display text-[10px] font-bold tracking-[0.15em] text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentPlayers.map((p, i) => (
                  <tr key={i} className="border-b border-border/30 transition-colors hover:bg-muted/30">
                    <td className="px-5 py-3">
                      <span className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold ${p.game === "Tower" ? "bg-[hsl(var(--neon-green)/0.1)] text-[hsl(var(--neon-green))]" : "bg-[hsl(var(--neon-purple)/0.1)] text-[hsl(var(--neon-purple))]"}`}>
                        {p.game}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{p.wallet}</td>
                    <td className="px-5 py-3 font-mono text-xs text-foreground">{p.bet}</td>
                    <td className={`px-5 py-3 font-mono text-xs font-semibold ${p.win ? "text-[hsl(var(--neon-green))]" : "text-destructive"}`}>
                      {p.payout}
                    </td>
                    <td className="px-5 py-3">
                      <a href="#" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-[hsl(var(--neon-green))]">
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
