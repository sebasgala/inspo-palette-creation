import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bocadoo · Tus planes de almuerzo, con QR" },
      {
        name: "description",
        content:
          "Bocadoo digitaliza los planes de almuerzo prepagados de los restaurantes en Quito. Valida cada almuerzo con un QR en segundos.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: LandingPage,
});
