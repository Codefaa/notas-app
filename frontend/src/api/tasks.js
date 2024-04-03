import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

axios.create({
    baseURL: URL,
    withCredentials: true,
  });

const API = `${URL}`;

export const getTasksRequest = async () => axios.get(`${API}/api/tasks`);

export const createTaskRequest = async (task) => axios.post(`${API}/api/tasks`, task);

export const updateTaskRequest = async (id, task) => axios.put(`${API}/api/tasks/${id}`, task);

export const deleteTaskRequest = async (id) => axios.delete(`${API}/api/tasks/${id}`);

export const getTaskRequest = async (id) => axios.get(`${API}/api/tasks/${id}`);
