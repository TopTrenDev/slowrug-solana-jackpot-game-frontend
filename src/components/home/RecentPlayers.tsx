import { ExternalLink } from "lucide-react";

interface PlayerRow {
  game: string;
  wallet: string;
  bet: string;
  payout: string;
  tx: string;
}

const mockPlayers: PlayerRow[] = [
  { game: "The Tower", wallet: "7xKp...3mNv", bet: "2.5 SOL", payout: "5.2 SOL", tx: "4rTx...mK2" },
  { game: "Infinite Rug", wallet: "9aHb...7zRw", bet: "1.0 SOL", payout: "0 SOL", tx: "8pLn...cV3" },
  { game: "The Tower", wallet: "3fWd...9qYe", bet: "0.5 SOL", payout: "1.8 SOL", tx: "2nMr...hJ7" },
  { game: "Infinite Rug", wallet: "5mCt...2kXa", bet: "3.0 SOL", payout: "7.4 SOL", tx: "6wBs...dF9" },
  { game: "The Tower", wallet: "1rEg...4pUv", bet: "0.8 SOL", payout: "0 SOL", tx: "3jKq...eN5" },
];

export default function RecentPlayers() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border px-6 py-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Players</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Game</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Wallet</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bet</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Payout</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">TX</th>
            </tr>
          </thead>
          <tbody>
            {mockPlayers.map((p, i) => (
              <tr key={i} className="border-b border-border/50 transition-colors last:border-0 hover:bg-secondary/40">
                <td className="px-6 py-3.5 text-sm font-medium text-foreground">{p.game}</td>
                <td className="px-6 py-3.5 font-mono text-sm text-muted-foreground">{p.wallet}</td>
                <td className="px-6 py-3.5 font-mono text-sm text-foreground">{p.bet}</td>
                <td className={`px-6 py-3.5 font-mono text-sm ${p.payout === "0 SOL" ? "text-destructive" : "text-primary"}`}>
                  {p.payout}
                </td>
                <td className="px-6 py-3.5">
                  <a href="#" className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground transition-colors hover:text-primary">
                    {p.tx}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
