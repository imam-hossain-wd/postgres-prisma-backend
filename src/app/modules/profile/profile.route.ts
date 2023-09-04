import { Router } from "express";
import { profileController } from "./profile.controller";


const router = Router();

router.post('/create-profile', profileController.createProfile)
router.get('/', profileController.getAllProfiles)
router.get('/:id', profileController.getSingleProfile)
router.patch('/:id', profileController.updateProfile)
router.delete('/:id', profileController.deleteProfile)


export const profileRoutes = router;