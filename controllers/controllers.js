// controllers.js
import Model from '../models/model.js';

// GET all items
export const getAllItems = async (req, res) => {
  try {
    const items = await Model.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET item by ID
export const getItemById = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE a new item or increment count if it already exists
export const createItem = async (req, res) => {
  try {
    const data = req.body;
    const keys = req.query.keys?.split(',') || [];

    const filter = Object.fromEntries(keys.map(k => [k, data[k]]));

    const existing = keys.length ? await Model.findOne(filter) : null;

    if (existing && 'count' in existing) {
      existing.count += 1;
      return res.status(200).json(await existing.save());
    }

    const newItem = new Model(data);
    res.status(201).json(await newItem.save());
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};


// UPDATE (replace) an item completely
export const replaceItem = async (req, res) => {
  try {
    const updatedItem = await Model.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE (patch) partial fields
export const updateItem = async (req, res) => {
  try {
    const updatedItem = await Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE an item
export const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Model.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
