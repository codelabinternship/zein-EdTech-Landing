import axios from "axios"

const defaultBaseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://zein-edtech-server.onrender.com"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? defaultBaseURL,
})

export default api
