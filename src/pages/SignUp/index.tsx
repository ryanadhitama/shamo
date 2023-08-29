import { Email, Lock, Name, Username } from '@assets';
import { Button, Header, Input } from '@components';
import { colors, fonts, useForm } from '@utils';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../redux/action';

const SignUp = ({ navigation }: any) => {
  const [form, setForm] = useForm({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signUpAction(form, navigation));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sign Up" desc="Register and Happy Shoping" />
      <View style={styles.content}>
        <View style={styles.form}>
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
          <Input
            value={form.password}
            onChangeText={(value: string) => setForm('password', value)}
            prefix={<Lock />}
            secureTextEntry
            label="Password"
            placeholder="Your Password"
          />
          <Button title="Sign Up" onPress={onSubmit} />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.link}>
          <Text style={styles.linkText}>
            Already have an account? <Text style={styles.linkTextCta}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 30,
    justifyContent: 'space-between'
  },
  form: {
    gap: 30
  },
  link: {
    alignItems: 'center'
  },
  linkText: {
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    fontSize: 14
  },
  linkTextCta: {
    color: colors.primary,
    fontFamily: fonts.primary[500]
  }
});
