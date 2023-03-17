import { Router } from "../deps.ts";
import { postRouter } from "./posts/post.router.ts";
import { authorRouter } from "./authors/author.router.ts";
export const api = new Router();

api.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
});

api
  .use(
    "/authors",
    authorRouter.routes(),
    authorRouter.allowedMethods(),
  )
  .use("/posts", postRouter.routes(), postRouter.allowedMethods());
