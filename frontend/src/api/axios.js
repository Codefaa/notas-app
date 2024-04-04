import axios from "axios";
import { REACT_APP_API_URL } from "../config.js";

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true,
});

console.log('backend: ', REACT_APP_API_URL);

export default instance;
