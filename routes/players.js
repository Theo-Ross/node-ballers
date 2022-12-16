import Router from "express";
import {
  getPlayerById,
  getPlayers,
  addPlayers,
  removePlayerById,
  updatePlayerById,
} from "../controller/players.js";

const router = Router();

router.get("/", getPlayers);

router.get("/:id", getPlayerById);

router.delete("/:id", removePlayerById);

router.post("/", addPlayers);

router.put("/:id", updatePlayerById);

export default router;
