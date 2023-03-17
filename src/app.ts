import { Application, FlashServer, hasFlash } from "../deps.ts";

import { api } from "./api.ts";

const appOptions = hasFlash() ? { serverConstructor: FlashServer } : undefined;

export const app = new Application(appOptions);

app.use(api.routes());
app.use(api.allowedMethods());
