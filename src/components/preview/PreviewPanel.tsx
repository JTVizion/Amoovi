import { Maximize2, Minimize2, MonitorPlay, Settings, Smartphone } from "lucide-react";

export function PreviewPanel() {
  return (
    <section className="flex h-[420px] flex-col overflow-hidden rounded-2xl border border-border/40 bg-surface-raised">
      <header className="flex items-center justify-between border-b border-border/40 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Program monitor
          </h2>
          <p className="text-xs text-muted-foreground/80">4K HDR · Rec.2020 · 00:00:22:03</p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <button className="rounded-full border border-border/40 p-2 transition hover:border-border hover:text-foreground">
            <Smartphone className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-border/40 p-2 transition hover:border-border hover:text-foreground">
            <MonitorPlay className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-border/40 p-2 transition hover:border-border hover:text-foreground">
            <Settings className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-border/40 p-2 transition hover:border-border hover:text-foreground">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </header>
      <div className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-surface to-surface-raised">
        <video
          className="h-full w-full rounded-[1.5rem] object-cover shadow-glass"
          poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          controls
        />
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-xs text-white backdrop-blur">
          <button className="rounded-full bg-white/10 px-3 py-1 font-semibold uppercase tracking-wider">
            Play
          </button>
          <div className="flex items-center gap-2">
            <span>01:02:14</span>
            <div className="h-1 w-32 rounded-full bg-white/20">
              <div className="h-full w-12 rounded-full bg-white" />
            </div>
            <span>03:44:09</span>
          </div>
        </div>
        <button className="absolute right-4 top-4 rounded-full border border-border/40 bg-surface/80 p-2 text-muted-foreground shadow-lg transition hover:text-foreground">
          <Minimize2 className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
