import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  user: string;
  text: string;
  time: string;
  color: string;
}

const COLORS = [
  "text-[hsl(145,100%,50%)]",
  "text-[hsl(270,80%,60%)]",
  "text-[hsl(320,90%,60%)]",
  "text-[hsl(185,100%,50%)]",
  "text-[hsl(45,100%,60%)]",
];

const MOCK_MESSAGES: ChatMessage[] = [
  { id: "1", user: "CryptoKing", text: "just hit 4.2x on tower 🔥", time: "2m", color: COLORS[0] },
  { id: "2", user: "SolWhale", text: "rug pulled me at 6x smh", time: "1m", color: COLORS[1] },
  { id: "3", user: "DegenLord", text: "who's playing rn?", time: "45s", color: COLORS[2] },
  { id: "4", user: "NeonTrader", text: "LFG 🚀 just won 12 SOL", time: "30s", color: COLORS[3] },
  { id: "5", user: "PhantomUser", text: "this game is addictive ngl", time: "15s", color: COLORS[4] },
  { id: "6", user: "AlphaGrind", text: "tower level 8 lets gooo", time: "5s", color: COLORS[0] },
];

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_MESSAGES);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const msg: ChatMessage = {
      id: Date.now().toString(),
      user: "You",
      text: input,
      time: "now",
      color: COLORS[2],
    };
    setMessages((prev) => [...prev, msg]);
    setInput("");
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--neon-purple))] shadow-lg transition-all hover:scale-105 active:scale-95 neon-glow-purple"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--neon-green))] font-mono text-[10px] font-bold text-black">
          {messages.length}
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex h-[480px] w-[340px] flex-col overflow-hidden rounded-2xl border border-[hsl(var(--neon-purple)/0.3)] bg-[hsl(260,22%,6%/0.95)] backdrop-blur-xl neon-glow-purple animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[hsl(var(--neon-green))] animate-pulse" />
          <span className="font-display text-sm font-semibold tracking-wider text-foreground">LIVE CHAT</span>
          <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            {messages.length}
          </span>
        </div>
        <div className="flex gap-1">
          <button onClick={() => setOpen(false)} className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground">
            <Minimize2 className="h-4 w-4" />
          </button>
          <button onClick={() => setOpen(false)} className="rounded-md p-1 text-muted-foreground transition-colors hover:text-destructive">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className="group">
            <div className="flex items-baseline gap-2">
              <span className={cn("text-sm font-semibold", msg.color)}>{msg.user}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{msg.time}</span>
            </div>
            <p className="text-sm text-foreground/80">{msg.text}</p>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-border p-3">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-[hsl(var(--neon-purple)/0.5)]"
          />
          <button
            onClick={sendMessage}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--neon-purple))] text-white transition-all hover:brightness-110 active:scale-95"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
