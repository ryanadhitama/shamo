import { fonts, numberWithCommas } from '@utils';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const FeaturedCard = ({ name, category, image, price }: any) => {
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

export default FeaturedCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEDEF',
    width: 215,
    height: 278,
    borderRadius: 20,
    overflow: 'hidden'
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
    fontFamily: fonts.primary.normal
  },
  title: {
    marginVertical: 6,
    color: '#2E2E2E',
    fontFamily: fonts.primary[600],
    fontSize: 18,
    textTransform: 'uppercase'
  },
  image: {
    width: 215,
    height: 165,
    objectFit: 'cover'
  }
});
