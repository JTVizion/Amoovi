import { useState } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { cn } from "../utils/cn";

export function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-surface-raised/70 px-3 py-1.5 text-sm font-medium shadow-sm transition hover:bg-surface-raised"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-foreground text-background">
          <User className="h-4 w-4" />
        </span>
        Alex Creator
        <ChevronDown className={cn("h-4 w-4 transition", open ? "rotate-180" : "rotate-0")} />
      </button>
      {open ? (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border/40 bg-surface-raised p-2 text-sm shadow-xl">
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-muted-foreground transition hover:bg-muted/40 hover:text-foreground">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-muted-foreground transition hover:bg-muted/40 hover:text-destructive">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
}
