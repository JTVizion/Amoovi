import { ImageDown, MessageSquareText, Music4, Play } from "lucide-react";

const providers = [
  {
    id: "runway",
    name: "Runway",
    description: "Gen-3 Alpha video & image generation",
    status: "Connected"
  },
  {
    id: "sora",
    name: "Sora",
    description: "Cinematic text-to-video in 4K",
    status: "Connect"
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "Voice cloning, SFX, audio polish",
    status: "Connected"
  }
];

export function GenerationPanel() {
  return (
    <section className="flex flex-1 flex-col gap-8 overflow-y-auto px-6 py-8">
      <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Generate</h1>
          <p className="text-muted-foreground">
            Spin up new footage, music, or narration with your favorite AI models.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full border border-border/40 px-3 py-1">
            <MessageSquareText className="h-4 w-4 text-primary" /> Prompt templates
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border/40 px-3 py-1">
            <ImageDown className="h-4 w-4 text-primary" /> AI asset bin
          </span>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          <div className="rounded-3xl border border-border/40 bg-surface-raised p-6 shadow-hover">
            <h2 className="text-xl font-semibold">Create with text</h2>
            <p className="text-sm text-muted-foreground">
              Describe the moment, shot, or soundtrack you need. Amoovi orchestrates the right provider.
            </p>
            <div className="mt-4 space-y-3">
              <textarea
                className="h-32 w-full resize-none rounded-2xl border border-border/40 bg-muted/30 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                placeholder="Example: Create a 12-second aerial shot of neon Tokyo at night with synthwave score"
              />
              <div className="flex flex-wrap items-center gap-2">
                <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-background shadow-glass transition hover:scale-[1.02]">
                  <Play className="mr-2 inline h-4 w-4" /> Generate draft
                </button>
                <button className="rounded-full border border-border/40 px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground transition hover:border-border hover:text-foreground">
                  Advanced options
                </button>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border/40 bg-surface-raised p-5">
              <h3 className="text-lg font-semibold">Music & SFX</h3>
              <p className="text-xs text-muted-foreground">
                Tap into ElevenLabs audio or bring your own stems.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/30">
                <Music4 className="h-4 w-4" /> Launch audio studio
              </button>
            </div>
            <div className="rounded-2xl border border-border/40 bg-surface-raised p-5">
              <h3 className="text-lg font-semibold">Story prompts</h3>
              <p className="text-xs text-muted-foreground">
                Save and reuse your favorite editing macros.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-border/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition hover:border-border hover:text-foreground">
                Browse library
              </button>
            </div>
          </div>
        </div>
        <aside className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Connected services</h2>
          <ul className="space-y-3">
            {providers.map((provider) => (
              <li key={provider.id} className="rounded-2xl border border-border/40 bg-surface-raised p-4 text-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{provider.name}</p>
                    <p className="text-xs text-muted-foreground">{provider.description}</p>
                  </div>
                  <button className="rounded-full border border-border/40 px-4 py-1 text-xs uppercase tracking-wide text-muted-foreground transition hover:border-border hover:text-foreground">
                    {provider.status}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
