import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { NewPlanScreen } from "@/components/bocadoo/owner-actions";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/dueno/planes/nuevo")({
  validateSearch: z.object({
    tipo: z.enum(["Semanal", "Quincenal", "Mensual", "Libre"]).optional(),
  }),
  head: () => ({ meta: [{ title: "Bocadoo — Nuevo plan" }] }),
  component: RouteComponent,
});

function RouteComponent() {
  const { tipo } = Route.useSearch();
  return (
    <AppShell>
      <NewPlanScreen initialType={tipo ?? "Mensual"} />
    </AppShell>
  );
}
