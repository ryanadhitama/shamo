import { Button, Header, Input } from '@components';
import { colors } from '@utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sign Up" desc="Register and Happy Shoping" />
      <View style={styles.content}>
        <View style={styles.form}>
          <Input label="Full Name" placeholder="Your Full Name" />
          <Input label="Username" placeholder="Your Username" />
          <Input label="Email Address" placeholder="Your Email Address" />
          <Input label="Password" placeholder="Your Password" />
          <Button title="Sign Up" />
        </View>
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
    paddingHorizontal: 30
  },
  form: {
    gap: 30
  }
});
