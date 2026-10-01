import { createFileRoute } from "@tanstack/react-router";

import { DinerSettingsScreen } from "@/components/bocadoo/diner";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/app/comensal/ajustes")({
  head: () => ({ meta: [{ title: "Bocadoo — Ajustes" }] }),
  component: () => (
    <AppShell>
      <DinerSettingsScreen />
    </AppShell>
  ),
});
