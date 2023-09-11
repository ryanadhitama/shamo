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
        `${err?.response?.data?.message} on Category API` || 'Terjadi kesalahan di API Category',
        'error'
      );
    });
};

export const getPopularProducts = () => (dispatch?: any) => {
  Axios.get(`${API_HOST.url}/products?tags=popular`)
    .then((res: any) => {
      dispatch({ type: 'SET_POPULAR', value: res.data.data.data });
    })
    .catch((err: any) => {
      showMessage(
        `${err?.response?.data?.message} on Popular Product API` ||
          'Terjadi kesalahan di API Products',
        'error'
      );
    });
};

export const getNewestProducts = (category?: string) => (dispatch?: any) => {
  Axios.get(`${API_HOST.url}/products?${category ? `categories=${category}` : 'tags=new'}`)
    .then((res: any) => {
      dispatch({ type: 'SET_PRODUCTS', value: res.data.data.data });
    })
    .catch((err: any) => {
      showMessage(
        `${err?.response?.data?.message} on Popular Product API` ||
          'Terjadi kesalahan di API Products',
        'error'
      );
    });
};
