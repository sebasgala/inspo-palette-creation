import { createFileRoute } from "@tanstack/react-router";

import { OwnerPlansScreen } from "@/components/bocadoo/owner";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/dueno/planes/")({
  head: () => ({ meta: [{ title: "Bocadoo — Mis planes" }] }),
  component: () => (
    <AppShell>
      <OwnerPlansScreen />
    </AppShell>
  ),
});
