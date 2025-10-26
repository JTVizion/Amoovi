import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const sampleProjects = [
  {
    id: "1",
    title: "Launch Trailer",
    updatedAt: "2 hours ago",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Creator Spotlight",
    updatedAt: "yesterday",
    thumbnail:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  }
];

export function ProjectDashboard() {
  return (
    <section className="flex flex-1 flex-col gap-8 overflow-y-auto px-6 py-8">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="text-muted-foreground">
            Create, collaborate, and export stunning stories from any device.
          </p>
        </div>
        <Link
          to="/workspace"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-medium text-background shadow-glass transition hover:scale-[1.02]"
        >
          <Plus className="h-4 w-4" /> New project
        </Link>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sampleProjects.map((project) => (
          <Link
            key={project.id}
            to={`/workspace?project=${project.id}`}
            className="group relative overflow-hidden rounded-2xl border border-border/40 bg-surface-raised shadow-hover transition hover:-translate-y-1"
          >
            <img
              src={project.thumbnail}
              alt="Project thumbnail"
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="flex items-center justify-between p-4">
              <div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Updated {project.updatedAt}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">Tap to open</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
