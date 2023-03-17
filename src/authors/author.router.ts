import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  createAuthor,
  deleteAuthor,
  editAuthor,
  getAllAuthors,
  getAuthor,
} from "./author.controller.ts";

export const authorRouter = new Router();

authorRouter
  .get("/", getAllAuthors)
  .post("/", createAuthor)
  .get("/:username", getAuthor)
  .put("/:username", editAuthor)
  .delete("/:username", deleteAuthor);
