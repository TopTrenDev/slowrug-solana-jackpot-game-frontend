import { Menu, X, Wallet, LogOut } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useWallet } from "@/hooks/useWallet";
import logoImg from "@/assets/slowrug-logo.png";
import { Gamepad2, Building2, Infinity, Home, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "The Tower", path: "/tower", icon: Gamepad2 },
  { label: "Operators Hub", path: "/operators", icon: Building2 },
  { label: "Infinite Rug", path: "/infinite-rug", icon: Infinity },
];

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { connected, shortAddress, connect, disconnect } = useWallet();

  return (
    <>
      {/* Fixed top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-border bg-sidebar/95 backdrop-blur-xl px-4 md:hidden">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="SlowRug" className="h-8 w-8 object-contain" />
          <span className="font-display text-lg text-foreground">
            SLOW<span className="text-primary neon-text-green">RUG</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          {connected ? (
            <button
              onClick={disconnect}
              className="flex items-center gap-1.5 bg-primary/10 border border-primary/30 px-3 py-1.5 text-xs font-mono text-primary"
            >
              {shortAddress}
              <LogOut className="h-3 w-3" />
            </button>
          ) : (
            <button
              onClick={connect}
              className="flex items-center gap-1.5 bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground uppercase tracking-wider"
            >
              <Wallet className="h-3.5 w-3.5" />
              Connect
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-foreground"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <nav className="absolute top-14 left-0 right-0 border-b border-border bg-sidebar/95 backdrop-blur-xl p-4 space-y-1 animate-slide-up">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm font-medium tracking-wide transition-all",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
                  )}
                >
                  <item.icon className={cn("h-[18px] w-[18px]", isActive && "drop-shadow-[0_0_6px_hsl(72,100%,50%,0.5)]")} />
                  {item.label}
                </NavLink>
              );
            })}
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-sm font-medium tracking-wide text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground"
            >
              <MessageCircle className="h-[18px] w-[18px]" />
              Discord
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
