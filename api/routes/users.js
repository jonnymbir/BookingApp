import express from "express";
import {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("logged in and can delete account");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    console.log(req.user);
    res.send("logged in as admin and can delete all accounts");
})

//UPDATE RECORD
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
