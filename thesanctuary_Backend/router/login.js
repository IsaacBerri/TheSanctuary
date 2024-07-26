import { Router } from "express";
import jwt from "jsonwebtoken";
import { readJSON } from "../utils/readJSON.js";

const users = readJSON("../utils/users.json");

export const routerLogin = Router();

routerLogin.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  // acá validaria si el usuario se encuentra en la base de datos
  const userExists = users.find((user) => {
    if (user.username === username && user.password === password) {
      return user;
    }
  });

  if (!userExists) {
    res.status(404).json({
      message: "El usuario ingresado no se encuentra en la base de datos",
    });
  }

  let token = jwt.sign(
    {
      username: username,
      password: password,
    },
    "secret",
    {
      expiresIn: "5m",
    }
  );

  res.status(200).header("authorization", token).json({
    message: "session started successfully",
    token: token,
  });
});
