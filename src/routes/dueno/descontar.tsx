import { createFileRoute } from "@tanstack/react-router";

import { ScanDiscountScreen } from "@/components/bocadoo/owner-actions";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/dueno/descontar")({
  head: () => ({ meta: [{ title: "Bocadoo — Escanear QR / Descontar" }] }),
  component: () => (
    <AppShell>
      <ScanDiscountScreen />
    </AppShell>
  ),
});
