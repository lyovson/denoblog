import { RouterContext } from "../../deps.ts";

export async function getAllAuthors(ctx: RouterContext<"/">) {
  ctx.response.body = "authors";
}

export async function createAuthor(ctx: RouterContext<"/">) {
  const body = ctx.request.body();
  const author = await body.value;
  console.log(author);
}

export async function getAuthor(ctx: RouterContext<"/:username">) {
  const username = ctx.params.username;
  console.log(username);
}

export async function editAuthor(ctx: RouterContext<"/:username">) {
  const username = ctx.params.username;
  console.log(username);
}

export async function deleteAuthor(ctx: RouterContext<"/:username">) {
  const username = ctx.params.username;
  console.log(username);
}
