import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { GenerationPanel } from "./components/GenerationPanel";
import { ProjectDashboard } from "./components/ProjectDashboard";
import { Workspace } from "./components/Workspace";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<ProjectDashboard />} />
        <Route
          path="/workspace"
          element={
            <Suspense fallback={<div className="p-6">Loading workspace…</div>}>
              <Workspace />
            </Suspense>
          }
        />
        <Route path="/generate" element={<GenerationPanel />} />
      </Route>
    </Routes>
  );
}
