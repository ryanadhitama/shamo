import { Logo } from '@assets';
import { colors } from '@utils';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary
  }
});
