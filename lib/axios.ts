import axios from 'axios'

const api = axios.create({
  baseURL: "https://zein-edtech-server.onrender.com" // like http://localhost:8000/api
})

export default api
