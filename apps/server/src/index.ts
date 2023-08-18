import { Hono } from "hono";

const app = new Hono();

const router = app
  .get("/", (c) => c.jsonT({ message: "Hello World" }))
  .get("/hello/:name", (c) =>
    c.jsonT({ message: `Hello ${c.req.param("name")}` })
  );

export default app;

export type AppType = typeof router;
