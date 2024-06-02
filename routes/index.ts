import { albumRouter } from "./album";
import { categoriesRouter } from "./category";
import { songRouter } from "./song";
import { tagsRouter } from "./tags";

const defineRoutes = (app: any) => {
  app.use(`/api/tags`, tagsRouter);
  app.use(`/api/category`, categoriesRouter);
  app.use(`/api/album`, albumRouter);
  app.use(`/api/song`, songRouter);
};

export { defineRoutes };
