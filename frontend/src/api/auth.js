import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const API = `${URL}`;

export const registerRequest = async (user) => axios.post(`${API}/api/auth/register`, user);

export const loginRequest = async (user) => axios.post(`${API}/api/auth/login`, user);

export const verifyTokenRequest = async () => axios.get(`${API}/api/auth/verify`);
