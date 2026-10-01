import { createFileRoute } from "@tanstack/react-router";

import { OwnerMenuScreen } from "@/components/bocadoo/owner";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/app/dueno/menu")({
  head: () => ({ meta: [{ title: "Bocadoo — Menú del día" }] }),
  component: () => (
    <AppShell>
      <OwnerMenuScreen />
    </AppShell>
  ),
});
