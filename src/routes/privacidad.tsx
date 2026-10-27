import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPage } from "@/components/landing/PrivacyPage";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad · Bocadoo" },
      {
        name: "description",
        content:
          "Conoce qué datos personales trata Bocadoo, para qué los usa, con quién los comparte y cómo puedes ejercer tus derechos.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: PrivacyPage,
});
