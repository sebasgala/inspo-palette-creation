import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { DinerHomeScreen } from "@/components/bocadoo/diner";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/comensal/")({
  validateSearch: z.object({ qr: z.boolean().optional() }),
  head: () => ({ meta: [{ title: "Bocadoo — Mis planes" }] }),
  component: RouteComponent,
});

function RouteComponent() {
  const { qr } = Route.useSearch();
  return (
    <AppShell>
      <DinerHomeScreen initialQrOpen={qr} />
    </AppShell>
  );
}
