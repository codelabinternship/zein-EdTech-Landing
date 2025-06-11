import axios from 'axios'

const api = axios.create({
  baseURL: "https://zein-edtech-server.onrender.com" 
  // baseURL: "http://localhost:8000",
})

export default api
