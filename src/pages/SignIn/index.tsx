import { Header } from '@components';
import { colors } from '@utils';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" desc="Sign In to Continue" />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  }
});
