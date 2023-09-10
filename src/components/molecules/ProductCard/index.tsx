import { colors, fonts, numberWithCommas } from '@utils';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ProductCard = ({ name, category, image, price }: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>Rp{numberWithCommas(price)}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  content: {
    padding: 20
  },
  category: {
    color: '#999999',
    fontSize: 12,
    fontFamily: fonts.primary.normal
  },
  price: {
    color: '#2C96F1',
    fontSize: 14,
    fontFamily: fonts.primary[500]
  },
  title: {
    marginVertical: 6,
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 16,
    textTransform: 'uppercase'
  },
  image: {
    borderRadius: 20,
    overflow: 'hidden',
    width: 120,
    height: 120,
    backgroundColor: '#ECEDEF',
    objectFit: 'cover'
  }
});
