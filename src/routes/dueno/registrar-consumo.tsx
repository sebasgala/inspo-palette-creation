import { createFileRoute } from "@tanstack/react-router";

import { PosScreen } from "@/components/bocadoo/owner-actions";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/dueno/registrar-consumo")({
  head: () => ({ meta: [{ title: "Bocadoo — Registrar consumo" }] }),
  component: () => (
    <AppShell>
      <PosScreen />
    </AppShell>
  ),
});
