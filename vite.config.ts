import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { createReleaseString } from "./src/utils/CreateReleaseString.ts";

export default defineConfig({
    base: "/",
    build: {
        sourcemap: true,
    },
    plugins: [
        react(),
        sentryVitePlugin({
            org: "aerh-sentry",
            project: "nerdweb",
            authToken: process.env.SENTRY_RELEASE_AUTH_TOKEN,
            release: {
                name: createReleaseString(process.env.GIT_SHA),
            },
            sourcemaps: {
                assets: "./dist/**",
                filesToDeleteAfterUpload: "./dist/**/*.map",
            },
            url: "https://sentry.aerh.io/"
        }),
    ],
    preview: {
        port: 3000,
        strictPort: true,
    },
    server: {
        port: 3000,
        strictPort: true,
        host: true,
    },
});
