import axios from "axios";

// Configuração básica do Axios
const api = axios.create({
  baseURL: 'http://18.117.187.82:3000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;