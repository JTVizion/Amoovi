import { AudioLines, Layers3, ListTree, Settings2, SquareStack } from "lucide-react";

const transportControls = [
  { id: "play", label: "Play" },
  { id: "prev", label: "Prev" },
  { id: "next", label: "Next" }
];

export function TimelineHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border/40 bg-surface/80 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-2 text-sm">
        <SquareStack className="h-4 w-4 text-primary" />
        Amoovi timeline
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-full bg-muted/40 px-2 py-1 text-xs font-medium text-muted-foreground lg:flex">
          {transportControls.map((control) => (
            <button
              key={control.id}
              className="rounded-full px-3 py-1 transition hover:bg-surface-raised hover:text-foreground"
            >
              {control.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <button className="rounded-full border border-border/40 p-2 transition hover:border-border hover:text-foreground">
            <ListTree className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-border/40 p-2 transition hover:border-border hover:text-foreground">
            <Layers3 className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-border/40 p-2 transition hover:border-border hover:text-foreground">
            <AudioLines className="h-4 w-4" />
          </button>
          <button className="rounded-full border border-border/40 p-2 transition hover:border-border hover:text-foreground">
            <Settings2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
