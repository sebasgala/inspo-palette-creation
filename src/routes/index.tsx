import { createFileRoute, redirect } from "@tanstack/react-router";

// Provisional: el prototipo vive ahora en /app. La landing ocupa "/" en el siguiente paso.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/app" });
  },
});
