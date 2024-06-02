import { router as tagsRouter } from "./tags";

const defineRoutes = (app: any) => {
  app.use(`/api/tags`, tagsRouter);
};

export { defineRoutes };
