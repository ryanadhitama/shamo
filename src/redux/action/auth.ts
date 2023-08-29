import Axios from 'axios';
import { API_HOST } from '../../config';
import { showMessage, storeData } from '../../utils';
import { setLoading } from './global';

export const signInAction = (form: any, navigation: any) => (dispatch: any) => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then((res: any) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(setLoading(false));
      storeData('token', { value: token });
      storeData('userProfile', profile);
      navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
    })
    .catch((err: any) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message || 'Error login', 'danger');
    });
};

export const signUpAction = (form: any, navigation: any) => (dispatch: any) => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/register`, form)
    .then((res: any) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(setLoading(false));
      storeData('token', { value: token });
      storeData('userProfile', profile);
      navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
    })
    .catch((err: any) => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.data?.message || 'Error login', 'danger');
    });
};
