import Axios from 'axios';
import { BASE_URL } from '../../constants';

export const axiosApi = Axios.create({
  baseURL: BASE_URL,
});
