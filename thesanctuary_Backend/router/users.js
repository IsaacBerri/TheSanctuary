import { Router } from "express";
import { validateToken } from "../utils/validateToken.js";
import { Users } from "../db/models/users.js";

export const routerUsers = Router();

// routerUsers.get("/", validateToken, (req, res) => {
//   res.json(users);
// });

routerUsers.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await Users.create({ username, password });
    res.json({ message: "User created", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
