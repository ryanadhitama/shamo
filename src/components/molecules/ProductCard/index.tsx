import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors, fonts, numberWithCommas } from '@utils';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from 'router';

type ProductDetailNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

const ProductCard = ({ id, name, category, image, price, description }: any) => {
  const navigation = useNavigation<ProductDetailNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {
          id,
          name,
          category,
          description,
          image: [image],
          price
        })
      }
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.content}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>Rp{numberWithCommas(price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
