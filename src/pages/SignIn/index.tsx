import { Button, Header, Input } from '@components';
import { colors } from '@utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" desc="Sign In to Continue" />
      <View style={styles.content}>
        <View style={styles.form}>
          <Input label="Email Address" placeholder="Your Email Address" />
          <Input label="Password" placeholder="Your Password" />
          <Button title="Sign In" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30
  },
  form: {
    gap: 30
  }
});
