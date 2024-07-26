import { routerUsers } from "./users.js";
import { routerLogin } from "./login.js";

export const indexRouter = (app) => {
  // app.use("/");
  app.use("/users", routerUsers);
  app.use("/login", routerLogin);
};
