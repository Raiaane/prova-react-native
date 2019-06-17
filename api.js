import Axios from 'axios';

const api = Axios.create({ baseURL: 'https://api.openweathermap.org/data/2.5/weather' });

export default api;