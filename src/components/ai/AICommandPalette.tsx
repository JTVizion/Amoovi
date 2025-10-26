import { BrainCircuit, MessageSquare, MicVocal, Settings2 } from "lucide-react";

const recentPrompts = [
  {
    id: "prompt-1",
    text: "Cut to best take, add upbeat soundtrack, 60s social edit",
    model: "Amoovi GPT-5",
    createdAt: "1 min ago"
  },
  {
    id: "prompt-2",
    text: "Balance audio levels, apply ElevenLabs clarity",
    model: "ElevenLabs Voice Suite",
    createdAt: "5 mins ago"
  }
];

export function AICommandPalette() {
  return (
    <aside className="flex h-[420px] flex-col overflow-hidden rounded-2xl border border-border/40 bg-surface-raised">
      <header className="flex items-center justify-between border-b border-border/40 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            A.I. director
          </h2>
          <p className="text-xs text-muted-foreground/80">Link GPT-5, Claude, Gemini, Runway, and more.</p>
        </div>
        <button className="rounded-full border border-border/40 p-2 text-muted-foreground transition hover:border-border hover:text-foreground">
          <Settings2 className="h-4 w-4" />
        </button>
      </header>
      <div className="space-y-3 px-4 py-3">
        <div className="flex items-center gap-2 rounded-2xl border border-border/40 bg-muted/30 px-3 py-2">
          <BrainCircuit className="h-5 w-5 text-primary" />
          <input
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            placeholder="Type to edit anything…"
          />
          <button className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-background shadow-glass">
            Generate
          </button>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/10 px-3 py-3 text-sm font-medium text-primary transition hover:bg-primary/20">
          <MicVocal className="h-4 w-4" />
          Voice command
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Recent prompts</p>
        <ul className="space-y-2 py-3">
          {recentPrompts.map((prompt) => (
            <li key={prompt.id} className="rounded-xl border border-border/40 bg-muted/30 p-3 text-sm text-muted-foreground transition hover:border-primary/40 hover:text-foreground">
              <p className="font-medium text-foreground">{prompt.text}</p>
              <p className="text-xs text-muted-foreground">
                {prompt.model} · {prompt.createdAt}
              </p>
            </li>
          ))}
        </ul>
        <div className="rounded-xl border border-border/40 bg-muted/30 p-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 text-foreground">
            <MessageSquare className="h-4 w-4 text-primary" />
            Connect a new AI service
          </div>
          <p className="mt-2">
            Hook up ElevenLabs, Runway, Google VEO, Sora, or your own agents with a guided setup.
          </p>
        </div>
      </div>
    </aside>
  );
}
