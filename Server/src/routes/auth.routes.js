const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware.js");

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get("/upload", authMiddleware);

module.exports = router