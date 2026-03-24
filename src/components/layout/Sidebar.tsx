import { NavLink, useLocation } from "react-router-dom";
import { Gamepad2, Building2, Infinity, MessageCircle, Wallet, Volume2, VolumeX, ChevronLeft, ChevronRight, Home, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useWallet } from "@/hooks/useWallet";
import logoImg from "@/assets/slowrug-logo.png";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "The Tower", path: "/tower", icon: Gamepad2 },
  { label: "Operators Hub", path: "/operators", icon: Building2 },
  { label: "Infinite Rug", path: "/infinite-rug", icon: Infinity },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [muted, setMuted] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-primary/8 bg-sidebar transition-[width] duration-300",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 px-4 border-b border-border">
        <img src={logoImg} alt="SlowRug" className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_0_8px_hsl(72,100%,50%,0.4)]" />
        {!collapsed && (
          <div>
            <span className="font-display text-2xl text-foreground">
              SLOW<span className="text-primary neon-text-green">RUG</span>
            </span>
            <p className="font-mono text-[10px] tracking-wider text-muted-foreground">SOLANA JACKPOT</p>
          </div>
        )}
      </div>

      {/* Wallet Button */}
      <div className="px-3 py-4">
        <button className={cn(
          "flex w-full items-center justify-center gap-2 py-2.5 text-sm font-semibold tracking-wider transition-all active:scale-[0.97] uppercase",
          "bg-primary text-primary-foreground hover:brightness-110",
          collapsed && "px-0"
        )}
        style={{ clipPath: collapsed ? undefined : 'polygon(0 0, 100% 0, 96% 100%, 0% 100%)' }}
        >
          <Wallet className="h-4 w-4 shrink-0" />
          {!collapsed && "Connect Wallet"}
        </button>
      </div>

      {/* Nav Section */}
      <div className="mt-1 px-3">
        {!collapsed && (
          <span className="mb-3 block px-3 font-mono text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase">
            Navigation
          </span>
        )}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "group relative flex items-center gap-3 px-3 py-2.5 text-sm font-medium tracking-wide transition-all",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
                )}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />
                )}
                <item.icon className={cn("h-[18px] w-[18px] shrink-0 transition-colors", isActive && "drop-shadow-[0_0_6px_hsl(72,100%,50%,0.5)]")} />
                {!collapsed && item.label}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Support Section */}
      <div className="mt-8 px-3">
        {!collapsed && (
          <span className="mb-3 block px-3 font-mono text-[10px] font-semibold tracking-widest text-muted-foreground/50 uppercase">
            Community
          </span>
        )}
        <a
          href="https://discord.gg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium tracking-wide text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-foreground"
        >
          <MessageCircle className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && "Discord"}
        </a>
      </div>

      <div className="flex-1" />

      {/* Live indicator */}
      {!collapsed && (
        <div className="mx-3 mb-3 border border-border bg-muted/50 p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-primary uppercase">Live</span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-foreground font-semibold">47</span> players online
          </p>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="flex items-center justify-between border-t border-border px-3 py-3">
        <button
          onClick={() => setMuted(!muted)}
          className="p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
    </aside>
  );
}
