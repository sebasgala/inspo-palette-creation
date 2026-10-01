import { createFileRoute } from "@tanstack/react-router";

import { LoginScreen } from "@/components/bocadoo/diner";
import { AppShell } from "@/components/bocadoo/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bocadoo — Tu almuerzo, sin cartulinas" },
      {
        name: "description",
        content: "Inicia sesión como comensal o como dueño de restaurante en Bocadoo.",
      },
      { property: "og:title", content: "Bocadoo" },
      { property: "og:description", content: "Planes de almuerzo prepagados en Quito." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <AppShell>
      <LoginScreen />
    </AppShell>
  ),
});
