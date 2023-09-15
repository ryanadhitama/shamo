import { showMessage } from '../../utils';
import Axios from 'axios';
import { API_HOST } from '../../config';

export const getRelatedProducts = (exclude?: string, category?: string) => (dispatch?: any) => {
  console.log(`${API_HOST.url}/products?categories=${category}&exclude=${exclude}`);
  Axios.get(`${API_HOST.url}/products?categories=${category}&exclude=${exclude}`)
    .then((res: any) => {
      dispatch({ type: 'SET_RELATED_PRODUCTS', value: res.data.data.data });
    })
    .catch((err: any) => {
      showMessage(
        `${err?.response?.data?.message} on Popular Product API` ||
          'Terjadi kesalahan di API Products',
        'error'
      );
    });
};
