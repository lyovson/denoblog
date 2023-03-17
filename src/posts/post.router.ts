import { Router } from "https://deno.land/x/oak/mod.ts";

export const postRouter = new Router();

import {
  createPost,
  deletePost,
  editPost,
  getAllPosts,
  getPost,
} from "./post.controller.ts";

postRouter
  .get("/", getAllPosts)
  .post("/", createPost)
  .get("/:slug", getPost)
  .put("/:slug", editPost)
  .delete("/:slug", deletePost);
