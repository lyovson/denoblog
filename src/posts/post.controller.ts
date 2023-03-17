import { RouterContext } from "../../deps.ts";

export async function getAllPosts(ctx: RouterContext<"/">) {
  ctx.response.body = "Posts";
}

export async function createPost(ctx: RouterContext<"/">) {
  const body = ctx.request.body();
  const Post = await body.value;
  console.log(Post);
}

export async function getPost(ctx: RouterContext<"/:slug">) {
  const slug = ctx.params.slug;
  console.log(slug);
}

export async function editPost(ctx: RouterContext<"/:slug">) {
  const slug = ctx.params.slug;
  console.log(slug);
}

export async function deletePost(ctx: RouterContext<"/:slug">) {
  const slug = ctx.params.slug;
  console.log(slug);
}
