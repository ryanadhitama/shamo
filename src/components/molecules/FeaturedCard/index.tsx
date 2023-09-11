import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { fonts, numberWithCommas } from '@utils';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from 'router';

type ProductDetailNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

const FeaturedCard = ({ id, name, category, image, price }: any) => {
  const navigation = useNavigation<ProductDetailNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {
          id,
          name
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
    fontFamily: fonts.primary[600]
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
