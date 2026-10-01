import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { ChargeScreen } from "@/components/bocadoo/owner-actions";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/dueno/cobrar")({
  validateSearch: z.object({ cliente: z.string().optional() }),
  head: () => ({ meta: [{ title: "Bocadoo — Cobrar plan" }] }),
  component: RouteComponent,
});

function RouteComponent() {
  const { cliente } = Route.useSearch();
  return (
    <AppShell>
      <ChargeScreen initialClientId={cliente} />
    </AppShell>
  );
}
