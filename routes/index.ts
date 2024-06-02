import { categoriesRouter } from "./category";
import { tagsRouter } from "./tags";

const defineRoutes = (app: any) => {
  app.use(`/api/tags`, tagsRouter);
  app.use(`/api/category`, categoriesRouter);
};

export { defineRoutes };
