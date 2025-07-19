import API from "./axios";

export const getTasks = async () => {
  const res = await API.get("/tasks");
  return res.data;
};

export const addTask = async (task) => {
  const res = await API.post("/tasks", task);
  return res.data;
};

export const updateTask = async (id, updates) => {
  const res = await API.patch(`/tasks/${id}`, updates);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await API.delete(`/tasks/${id}`);
  return res.data;
};
