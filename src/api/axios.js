import axios from 'axios';
import { getToken } from '../utils/auth'

axios.defaults.baseURL="http://localhost:3000/api/v1";

const appendAuthToken = config => {
    const jwtToken = getToken();
    const Authorization = jwtToken && `Bearer ${jwtToken}`;
    return {...config, headers: {Authorization, ...config.headers}};
}

export const get = (url, config={}) => 
    axios.get(url, appendAuthToken(config));
   
export const post = (url, config={}) =>
    axios.post(url, appendAuthToken(config));

export const put = (url, config={}) => 
    axios.put(url, appendAuthToken(config));

export const del = (url, config={}) =>
    axios.delete(url, appendAuthToken(config));



