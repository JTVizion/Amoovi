import { Upload, Wand2 } from "lucide-react";
import { Timeline } from "./timeline/Timeline";
import { MediaBin } from "./bin/MediaBin";
import { PreviewPanel } from "./preview/PreviewPanel";
import { AICommandPalette } from "./ai/AICommandPalette";

export function Workspace() {
  return (
    <section className="flex h-full flex-1 flex-col overflow-hidden">
      <div className="grid flex-1 grid-rows-[auto_1fr_auto] gap-3 overflow-hidden p-4">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[320px_1fr_320px]">
          <MediaBin />
          <PreviewPanel />
          <AICommandPalette />
        </div>
        <Timeline />
        <footer className="flex items-center justify-between rounded-2xl border border-border/40 bg-surface-raised px-4 py-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Auto-saving to Amoovi Cloud
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background shadow-glass transition hover:scale-[1.02]">
            <Wand2 className="h-4 w-4" /> Export master
          </button>
        </footer>
      </div>
    </section>
  );
}
