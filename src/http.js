import axios from "axios";

const http = axios.create({
  baseURL: "https://domen/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default http;
