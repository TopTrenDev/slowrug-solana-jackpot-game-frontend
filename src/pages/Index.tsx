import { DollarSign, Hash, Trophy, ArrowRight, Gamepad2, Infinity, ExternalLink, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import towerImg from "@/assets/tower-game.jpg";
import rugImg from "@/assets/infinite-rug-game.jpg";

const stats = [
  { icon: DollarSign, value: "$12,847", label: "Amount Wagered", glow: "neon-glow-green", color: "text-primary" },
  { icon: Hash, value: "1,293", label: "Bets Placed", glow: "neon-glow-cyan", color: "text-secondary" },
  { icon: Trophy, value: "$8,412", label: "Total Wins", glow: "neon-glow-gold", color: "text-accent" },
];

const games = [
  {
    title: "THE TOWER",
    desc: "Climb the tower, multiplying your bet at each level. Cash out before it collapses.",
    path: "/tower",
    icon: Gamepad2,
    img: towerImg,
    borderClass: "neon-border-green",
    tagColor: "bg-primary/15 text-primary",
  },
  {
    title: "INFINITE RUG",
    desc: "Watch the multiplier climb. Pull out before the rug gets pulled beneath you.",
    path: "/infinite-rug",
    icon: Infinity,
    img: rugImg,
    borderClass: "neon-border-cyan",
    tagColor: "bg-secondary/15 text-secondary",
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>
        <div className="relative z-10 px-4 pb-16 pt-16 sm:px-8 lg:px-12 sm:pb-20 sm:pt-24">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">Provably Fair • On-Chain</span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl text-foreground lg:text-[120px] leading-[0.9]">
            PLAY.<br />
            <span className="text-primary neon-text-green">WIN.</span><br />
            <span className="text-secondary neon-text-cyan">REPEAT.</span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base text-foreground/50 leading-relaxed">
            Solana-powered jackpot games with instant payouts, verifiable randomness, and zero middlemen.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/tower"
              className="group inline-flex items-center justify-center gap-2 bg-primary px-7 py-3 text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] uppercase"
              style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
            >
              <Zap className="h-4 w-4" />
              Play Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/operators"
              className="inline-flex items-center justify-center gap-2 border border-secondary/40 bg-secondary/10 px-7 py-3 text-sm font-semibold tracking-wider text-secondary transition-all hover:bg-secondary/20 active:scale-[0.97] uppercase"
              style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%)' }}
            >
              Become Operator
            </Link>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-8 lg:px-12">
        {/* Stats */}
        <section className="relative -mt-4 mb-8 sm:mb-12">
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-5 transition-all duration-300 hover:translate-y-[-2px] ${s.glow} animate-slide-up`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-9 w-9 items-center justify-center bg-muted ${s.color}`}>
                    <s.icon className="h-4 w-4" />
                  </div>
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-foreground">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Games */}
        <section className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Gamepad2 className="h-4 w-4 text-primary" />
            <h2 className="font-display text-2xl text-muted-foreground">GAMES</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {games.map((g) => (
              <Link
                key={g.path}
                to={g.path}
                className={`group relative overflow-hidden border bg-card transition-all duration-500 hover:translate-y-[-2px] ${g.borderClass}`}
              >
                <div className="relative h-36 sm:h-44 overflow-hidden">
                  <img src={g.img} alt={g.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <span className={`absolute top-3 left-3 px-3 py-1 font-mono text-[10px] font-bold tracking-widest ${g.tagColor}`}>
                    LIVE
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <g.icon className="h-4 w-4 text-foreground" />
                    <h3 className="font-display text-xl sm:text-2xl text-foreground">{g.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{g.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-primary transition-all group-hover:gap-3 uppercase">
                    Play Now <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Players - Mobile: cards, Desktop: table */}
        <section className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <h2 className="font-display text-2xl text-muted-foreground">RECENT PLAYS</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          {/* Mobile cards */}
          <div className="space-y-2 sm:hidden">
            {recentPlayers.map((p, i) => (
              <div key={i} className="border border-border bg-card/60 backdrop-blur-sm p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 font-mono text-[10px] font-bold ${p.game === "Tower" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                    {p.game}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{p.wallet}</span>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-foreground">{p.bet}</p>
                  <p className={`font-mono text-xs font-semibold ${p.win ? "text-primary" : "text-destructive"}`}>{p.payout}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-hidden border border-border bg-card/60 backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Game", "Wallet", "Bet", "Payout", "TX"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left font-mono text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentPlayers.map((p, i) => (
                  <tr key={i} className="border-b border-border/30 transition-colors hover:bg-muted/30">
                    <td className="px-5 py-3">
                      <span className={`px-2 py-0.5 font-mono text-[10px] font-bold ${p.game === "Tower" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                        {p.game}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{p.wallet}</td>
                    <td className="px-5 py-3 font-mono text-xs text-foreground">{p.bet}</td>
                    <td className={`px-5 py-3 font-mono text-xs font-semibold ${p.win ? "text-primary" : "text-destructive"}`}>{p.payout}</td>
                    <td className="px-5 py-3">
                      <a href="#" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary">
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
