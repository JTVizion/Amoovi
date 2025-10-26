import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { UserMenu } from "./UserMenu";
import { cn } from "../utils/cn";

const routes = [
  { to: "/", label: "Projects" },
  { to: "/workspace", label: "Workspace" },
  { to: "/generate", label: "Generation" }
];

export function AppShell() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-surface text-foreground">
      <header className="flex items-center justify-between border-b border-border/50 px-6 py-3 backdrop-blur">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-foreground" />
          Amoovi
        </Link>
        <nav className="hidden gap-1 rounded-full bg-muted/40 p-1 text-sm font-medium md:flex">
          {routes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-1.5 transition",
                  isActive || location.pathname.startsWith(route.to)
                    ? "bg-surface-raised text-primary shadow"
                    : "text-muted-foreground hover:bg-surface-raised/40"
                )
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
        <UserMenu />
      </header>
      <main className="flex flex-1 flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
