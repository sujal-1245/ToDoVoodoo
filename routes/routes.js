import express from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  replaceItem,
  updateItem,
  deleteItem
} from '../controllers/controllers.js'

const router = express.Router();

router.get("/tasks", getAllItems);
router.get("/tasks/:id", getItemById);
router.post("/tasks", createItem);
router.put("/tasks/:id", replaceItem);
router.patch("/tasks/:id", updateItem);
router.delete("/tasks/:id", deleteItem);

export default router;
