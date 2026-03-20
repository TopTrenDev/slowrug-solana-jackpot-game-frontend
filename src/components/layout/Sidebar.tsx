import { NavLink, useLocation } from "react-router-dom";
import { Gamepad2, Building2, Infinity, MessageCircle, Wallet, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
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
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border bg-[hsl(var(--sidebar-background))] transition-[width] duration-300",
        collapsed ? "w-[72px]" : "w-[240px]"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <span className="text-lg font-bold text-primary">S</span>
        </div>
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight text-foreground">
            Slow<span className="text-primary">RUG</span>
          </span>
        )}
      </div>

      {/* Wallet Button */}
      <div className="px-3 pb-2">
        <button className={cn(
          "flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/20 active:scale-[0.97]",
          collapsed && "px-0"
        )}>
          <Wallet className="h-4 w-4 shrink-0" />
          {!collapsed && "Select Wallet"}
        </button>
      </div>

      {/* Nav Section */}
      <div className="mt-2 px-3">
        {!collapsed && (
          <span className="mb-2 block px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            Games
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
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))] hover:text-foreground"
                )}
              >
                <item.icon className={cn("h-[18px] w-[18px] shrink-0 transition-colors", isActive && "text-primary")} />
                {!collapsed && item.label}
                {isActive && (
                  <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Support Section */}
      <div className="mt-6 px-3">
        {!collapsed && (
          <span className="mb-2 block px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
            Support
          </span>
        )}
        <a
          href="https://discord.gg"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[hsl(var(--sidebar-foreground))] transition-all hover:bg-[hsl(var(--sidebar-accent))] hover:text-foreground"
        >
          <MessageCircle className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && "Discord"}
        </a>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Controls */}
      <div className="flex items-center justify-between border-t border-border px-3 py-3">
        <button
          onClick={() => setMuted(!muted)}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
    </aside>
  );
}
