import { ChevronLeft, Wishlist, WishlistActive } from '@assets';
import { Button } from '@components';
import { colors, fonts, getData, numberWithCommas, storeData } from '@utils';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetail = ({ navigation, route }: any) => {
  const { id, name, description, image, category, price } = route.params;
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('wishlist').then((res) => {
        if (!res) {
          storeData('wishlist', []);
        } else {
          const arr = res;
          if (arr.includes(id)) {
            setLiked(true);
          }
        }
      });
    });
  }, [id, navigation]);

  const addWishlist = () => {
    getData('wishlist').then((res) => {
      if (res?.includes(id)) {
        const arr = res;
        var index = arr.indexOf(id);
        if (index !== -1) {
          arr.splice(index, 1);
        }
        storeData('wishlist', arr);
        setLiked(false);
      } else {
        const arr = res;
        arr.push(id);
        storeData('wishlist', arr);
        setLiked(true);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ImageBackground source={{ uri: image[0] }} style={styles.cover}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.body}>
        <View style={styles.bodyTitle}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>
          <TouchableOpacity onPress={() => addWishlist()}>
            {liked ? <WishlistActive /> : <Wishlist />}
          </TouchableOpacity>
        </View>
        <View style={styles.price}>
          <Text style={styles.priceLabel}>Price starts from</Text>
          <Text style={styles.priceAmount}>Rp {numberWithCommas(price)}</Text>
        </View>
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.subtitle}>Familiar Shoes</Text>
        <Button title="Add to Cart" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  cover: {
    height: 350,
    paddingTop: 20,
    paddingHorizontal: 30
  },
  body: {
    flex: 1,
    borderTopStartRadius: 24,
    borderTopRightRadius: 24,
    padding: 30,
    backgroundColor: colors.secondary
  },
  bodyTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 18
  },
  category: {
    color: '#999',
    fontSize: 12,
    fontFamily: fonts.primary.normal
  },
  description: {
    color: '#999',
    fontSize: 14,
    fontFamily: fonts.primary[300],
    marginBottom: 30
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.primary[500],
    marginBottom: 12
  },
  price: {
    marginTop: 20,
    marginBottom: 30,
    padding: 16,
    backgroundColor: colors.input,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  priceLabel: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.primary.normal
  },
  priceAmount: {
    color: colors.blue,
    fontSize: 16,
    fontFamily: fonts.primary[600]
  }
});
