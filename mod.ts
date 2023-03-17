import { loadEnv, log } from "./deps.ts";

import { app } from "./src/app.ts";

const abortController = new AbortController();

const { PORT } = await loadEnv();
addEventListener("unload", () => abortController.abort("unload"));

app.listen({
  port: parseInt(PORT),
  signal: abortController.signal,
});

app.addEventListener("listen", ({ hostname, port, serverType }) => {
  log.info("Start listening on " + `${hostname}:${port}`);
  log.info("using HTTP server: " + (serverType));
});
