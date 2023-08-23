import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: { fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium' }
});
