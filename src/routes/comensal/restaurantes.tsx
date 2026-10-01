import { createFileRoute } from "@tanstack/react-router";

import { MarketplaceScreen } from "@/components/bocadoo/diner";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/comensal/restaurantes")({
  head: () => ({ meta: [{ title: "Bocadoo — Restaurantes" }] }),
  component: () => (
    <AppShell>
      <MarketplaceScreen />
    </AppShell>
  ),
});
