import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.3:3333',
});

export default api;
//  yarn json-server server.json -p 3333 --host 192.168.15.3
