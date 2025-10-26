import { Scissors, Timer, Waves, ZoomIn } from "lucide-react";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineTrack } from "./TimelineTrack";

const sampleClips = [
  { id: "clip-1", label: "Opening sequence", start: 0, duration: 6.4 },
  { id: "clip-2", label: "Interview angle", start: 6.4, duration: 14.2 },
  { id: "clip-3", label: "B-roll montage", start: 20.6, duration: 12.1 }
];

export function Timeline() {
  return (
    <section className="flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-border/40 bg-surface-raised">
      <TimelineHeader />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden w-64 flex-col border-r border-border/40 bg-surface/60 backdrop-blur lg:flex">
          <div className="flex items-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Tracks
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-foreground transition hover:bg-muted/40">
            <Waves className="h-4 w-4 text-primary" /> Master audio
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-foreground transition hover:bg-muted/40">
            <Scissors className="h-4 w-4 text-primary" /> Video 1
          </button>
        </div>
        <div className="flex-1 overflow-x-auto">
          <div className="flex min-w-full flex-col">
            <div className="flex items-center gap-3 border-b border-border/30 bg-surface/80 px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground">
              <span className="flex items-center gap-2">
                <ZoomIn className="h-4 w-4" /> Zoom 1.5x
              </span>
              <span className="flex items-center gap-2">
                <Timer className="h-4 w-4" /> 24 fps
              </span>
            </div>
            <div className="flex-1 space-y-3 p-4">
              <TimelineTrack label="V1" clips={sampleClips} />
              <TimelineTrack label="A1" clips={sampleClips.map((clip) => ({ ...clip, label: `${clip.label} audio` }))} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
