import axios from "axios";

// Configuração básica do Axios
const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;