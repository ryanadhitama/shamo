import { AvatarLarge, Check, Close, Email, Name, Username } from '@assets';
import { AppHeader, Input } from '@components';
import { colors, getData, showMessage, storeData, useForm } from '@utils';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/action';
import Axios from 'axios';
import { API_HOST } from 'config';

const EditProfile = ({ navigation }: any) => {
  const [form, setForm, setForms] = useForm({
    name: '',
    username: '',
    email: ''
  });

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then((res) => {
        setForms(res);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const dispatch = useDispatch();

  const onSubmit = async () => {
    dispatch(setLoading(true));
    let resultObj: any = {};
    Object.keys(form).map((obj) => {
      if (form[obj]) {
        resultObj[obj] = form[obj];
      }
    });
    getData('token').then((resToken) => {
      Axios.post(`${API_HOST.url}/user`, resultObj, {
        headers: {
          Authorization: resToken.value
        }
      })
        .then((res) => {
          showMessage('Update Success', 'success');
          storeData('userProfile', res.data.data).then(() => {
            navigation.goBack();
          });
          dispatch(setLoading(false));
        })
        .catch((err) => {
          showMessage(
            `${err?.response?.data?.message} on Update Profile API` ||
              'Terjadi kesalahan di API Update Profile',
            'error'
          );
          dispatch(setLoading(false));
        });
    });
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title="Edit Profile"
        suffix={
          <TouchableOpacity onPress={onSubmit}>
            <Check />
          </TouchableOpacity>
        }
        prefix={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Close />
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.avatar}>
            <AvatarLarge />
          </View>
          <Input
            value={form.name}
            onChangeText={(value: string) => setForm('name', value)}
            prefix={<Name />}
            label="Full Name"
            placeholder="Your Full Name"
          />
          <Input
            value={form.username}
            onChangeText={(value: string) => setForm('username', value)}
            prefix={<Username />}
            label="Username"
            placeholder="Your Username"
          />
          <Input
            value={form.email}
            onChangeText={(value: string) => setForm('email', value)}
            prefix={<Email />}
            label="Email Address"
            placeholder="Your Email Address"
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    backgroundColor: colors.bg.secondary,
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    justifyContent: 'space-between'
  },
  form: {
    gap: 30
  },
  avatar: {
    alignItems: 'center'
  }
});
