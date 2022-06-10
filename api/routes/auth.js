import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, Auth Here");
});

router.get("/register", (req, res) => {
    res.send("Hello, Register Here");
});

export default router;