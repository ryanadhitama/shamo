import { Button, Header, Input } from '@components';
import { colors, fonts } from '@utils';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sign Up" desc="Register and Happy Shoping" />
      <View style={styles.content}>
        <View style={styles.form}>
          <Input label="Full Name" placeholder="Your Full Name" />
          <Input label="Username" placeholder="Your Username" />
          <Input label="Email Address" placeholder="Your Email Address" />
          <Input secureTextEntry label="Password" placeholder="Your Password" />
          <Button title="Sign Up" />
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
