import express from "express";
import {
  getHotels,
  getHotel,
  createHotel,
  deleteHotel,
  updateHotel,
  countByCity,
  countByType,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE RECORD
router.post("/", verifyAdmin, createHotel);

//UPDATE RECORD
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
