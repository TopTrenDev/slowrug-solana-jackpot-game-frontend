import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  accentClass?: string;
}

export default function StatCard({ icon: Icon, value, label, accentClass = "text-primary" }: StatCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
      <div className={cn("mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary", accentClass)}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-mono text-2xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
