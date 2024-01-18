import express from "express";
const router = express.Router();
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post('/register', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
// router.get('/profile', getUserProfile)
// router.put('/profile', updateUserProfile)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router