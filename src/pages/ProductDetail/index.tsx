import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Product Detail</Text>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
