import express from "express";
import timerController from "../Controllers/timerControllers.js";

const router = express.Router()

router.get("/",timerController.index)
router.get("/tasks/create",timerController.create)
router.post("/store",timerController.store)
router.get("/edit/:id",timerController.edit)
router.post("/update/:id",timerController.update)
router.get("/delete/:id",timerController.delete)

router.get("/select/:id",timerController.select_task)
router.post("/start/:id",timerController.start)
router.get("/stop",timerController.stop)
router.post("/update-task-status",timerController.update_task)

export default router