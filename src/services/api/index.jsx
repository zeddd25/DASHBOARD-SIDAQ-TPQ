// import axios from 'axios'
// export const instance = axios.create({
//     baseUrl : import.meta.env.VITE_APP_BASE_URL
// })

import axios from "axios";
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export default instance;
