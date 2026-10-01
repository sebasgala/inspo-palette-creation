import { createFileRoute } from "@tanstack/react-router";

import { OwnerSettingsScreen } from "@/components/bocadoo/owner";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/app/dueno/ajustes")({
  head: () => ({ meta: [{ title: "Bocadoo — Ajustes del restaurante" }] }),
  component: () => (
    <AppShell>
      <OwnerSettingsScreen />
    </AppShell>
  ),
});
