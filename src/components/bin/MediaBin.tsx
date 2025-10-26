import { CloudUpload, HardDrive, Layers, Search, Sparkles } from "lucide-react";

const sampleClips = [
  {
    id: "clip-1",
    name: "Opening shot.mov",
    duration: "00:00:08",
    size: "420 MB",
    source: "Upload"
  },
  {
    id: "clip-2",
    name: "Interview angle 2.mp4",
    duration: "00:02:14",
    size: "1.4 GB",
    source: "Google Drive"
  }
];

export function MediaBin() {
  return (
    <aside className="flex h-[420px] flex-col overflow-hidden rounded-2xl border border-border/40 bg-surface-raised">
      <header className="flex items-center justify-between border-b border-border/40 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Media bin
          </h2>
          <p className="text-xs text-muted-foreground/80">Proxy creation enabled · TurboProxy</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/30">
          <Sparkles className="h-4 w-4" /> Analyze
        </button>
      </header>
      <div className="flex items-center gap-2 px-4 py-3">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground">
          <Search className="h-4 w-4" /> Search clips
        </div>
        <button className="inline-flex items-center gap-1 rounded-full border border-border/40 px-3 py-1.5 text-xs uppercase tracking-wide text-muted-foreground transition hover:border-border hover:text-foreground">
          <Layers className="h-3.5 w-3.5" /> Filter
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4">
        <button className="flex items-center gap-2 rounded-xl border border-dashed border-primary/40 bg-primary/10 px-3 py-2 text-left text-sm font-semibold text-primary transition hover:bg-primary/20">
          <CloudUpload className="h-4 w-4" /> Upload media
        </button>
        <button className="flex items-center gap-2 rounded-xl border border-border/40 bg-muted/30 px-3 py-2 text-left text-sm text-muted-foreground transition hover:bg-muted/40">
          <HardDrive className="h-4 w-4" /> Link storage
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-2">
        <ul className="space-y-2 py-3">
          {sampleClips.map((clip) => (
            <li
              key={clip.id}
              className="flex items-center justify-between rounded-xl border border-transparent bg-muted/30 px-3 py-2 text-sm transition hover:border-primary/40 hover:bg-muted/50"
            >
              <div>
                <p className="font-medium text-foreground">{clip.name}</p>
                <p className="text-xs text-muted-foreground">
                  {clip.duration} · {clip.size} · {clip.source}
                </p>
              </div>
              <span className="text-xs uppercase text-primary">Proxy ready</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
