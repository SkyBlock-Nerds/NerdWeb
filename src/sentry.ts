import * as Sentry from "@sentry/react";
import { createReleaseString } from "./utils/CreateReleaseString.ts";

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.10,
    replaysOnErrorSampleRate: 1.0,
    environment: import.meta.env.MODE,
    release: createReleaseString(import.meta.env.VITE_GIT_SHA),
});
