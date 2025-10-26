import { useMemo } from "react";
import { cn } from "../../utils/cn";

type Clip = {
  id: string;
  label: string;
  start: number;
  duration: number;
};

type TimelineTrackProps = {
  label: string;
  clips: Clip[];
};

const TIMELINE_SCALE = 40;

export function TimelineTrack({ label, clips }: TimelineTrackProps) {
  const duration = useMemo(
    () => clips.reduce((max, clip) => Math.max(max, clip.start + clip.duration), 0),
    [clips]
  );

  return (
    <div className="flex gap-3">
      <aside className="flex h-16 w-12 items-center justify-center rounded-lg bg-muted/40 text-xs font-semibold text-muted-foreground">
        {label}
      </aside>
      <div className="relative flex-1 overflow-hidden rounded-xl border border-border/30 bg-gradient-to-br from-surface to-surface-raised/70">
        <div className="absolute inset-0 grid h-full w-full grid-rows-1" style={{ gridTemplateColumns: `repeat(${Math.ceil(duration)}, minmax(${TIMELINE_SCALE}px, 1fr))` }}>
          {Array.from({ length: Math.ceil(duration) }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "border-r border-border/20",
                index % 2 === 0 ? "bg-surface/40" : "bg-surface/20"
              )}
            />
          ))}
        </div>
        <div className="relative flex h-full items-center gap-2 px-3">
          {clips.map((clip) => (
            <div
              key={clip.id}
              className="group relative flex h-12 min-w-[120px] flex-col justify-center rounded-xl border border-primary/30 bg-primary/20 px-4 text-xs text-primary-foreground shadow-inner backdrop-blur transition hover:scale-[1.01]"
              style={{
                marginLeft: `${clip.start * 8}px`,
                width: `${clip.duration * TIMELINE_SCALE}px`
              }}
            >
              <span className="font-semibold">{clip.label}</span>
              <span className="text-[10px] uppercase text-muted-foreground">{clip.duration.toFixed(1)}s</span>
              <span className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
