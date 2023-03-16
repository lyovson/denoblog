import { Router } from "https://deno.land/x/oak/mod.ts";

const authorRouter = new Router();

authorRouter.get("/authors", (ctx) => {
  ctx.response.body = "Authors are here";
});

export default authorRouter;
