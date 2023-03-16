import {
  Application,
  FlashServer,
  hasFlash,
} from "https://deno.land/x/oak/mod.ts";

import "https://deno.land/x/std/dotenv/load.ts";

import { Router } from "https://deno.land/x/oak/mod.ts";

import authorRouter from "./author/author.router.ts";

const appOptions = hasFlash() ? { serverConstructor: FlashServer } : undefined;

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

const app = new Application(appOptions);

app.use(router.routes());
app.use(router.allowedMethods());
app.use(authorRouter.routes());
app.use(authorRouter.allowedMethods());

const PORT = Deno.env.get("PORT") ? parseInt(Deno.env.get("PORT")!) : 3000;

// abortController is used to abort the server when the page is closed
const abortController = new AbortController();
addEventListener("unload", () => abortController.abort("unload"));

app.listen({
  signal: abortController.signal,
  port: PORT,
});
