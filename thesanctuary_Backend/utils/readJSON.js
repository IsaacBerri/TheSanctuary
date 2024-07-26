import { createRequire } from "node:module";

export const readJSON = (path) => {
  const requireJson = createRequire(import.meta.url);
  const JSON = requireJson(path);

  return JSON;
};
