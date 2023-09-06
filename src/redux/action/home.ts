import { showMessage } from '../../utils';
import Axios from 'axios';
import { API_HOST } from '../../config';

export const getCategories = () => (dispatch?: any) => {
  Axios.get(`${API_HOST.url}/categories`)
    .then((res: any) => {
      dispatch({ type: 'SET_CATEGORIES', value: res.data.data.data });
    })
    .catch((err: any) => {
      showMessage(
        `${err?.response?.data?.message} on Category API` || 'Terjadi kesalahan di API Food',
        'error'
      );
    });
};
