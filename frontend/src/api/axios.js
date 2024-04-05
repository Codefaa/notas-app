import axios from "axios";
import { REACT_APP_API_URL } from "../config.js";

const URL = REACT_APP_API_URL + "/api";

const instance = axios.create({
  baseURL: URL,
  withCredentials: true,
});

console.log('backend: ', REACT_APP_API_URL);

export default instance;
