import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { OwnerHomeScreen } from "@/components/bocadoo/owner";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/dueno/")({
  validateSearch: z.object({ agregarCliente: z.boolean().optional() }),
  head: () => ({ meta: [{ title: "Bocadoo — Panel del dueño" }] }),
  component: RouteComponent,
});

function RouteComponent() {
  const { agregarCliente } = Route.useSearch();
  return (
    <AppShell>
      <OwnerHomeScreen initialAddClientOpen={agregarCliente} />
    </AppShell>
  );
}
