import axios from "axios";
import REACT_APP_API_URL from "../config";

const URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api"

const instance = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default instance;
