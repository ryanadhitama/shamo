import { ChevronLeft, Wishlist, WishlistActive } from '@assets';
import { Button } from '@components';
import { colors, fonts, getData, numberWithCommas, storeData } from '@utils';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from 'redux/action';

const ProductDetail = ({ navigation, route }: any) => {
  const { id, name, description, image, category, price, categoryId } = route.params;
  const [liked, setLiked] = useState<boolean>(false);
  const { relatedProducts } = useSelector((state: any) => state.productReducer);
  const dispatch = useDispatch();

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
      dispatch(getRelatedProducts(id, categoryId));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        {relatedProducts?.length > 0 ? (
          <>
            <Text style={styles.subtitle}>Familiar Shoes</Text>
            <ScrollView horizontal style={{ flexGrow: 0 }} contentContainerStyle={styles.familiar}>
              {relatedProducts?.map((r: any) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.replace('ProductDetail', {
                      id: r?.id,
                      name: r?.name,
                      category: r?.category?.name,
                      description: r?.description,
                      image: r?.galleries?.map((rg: any) => rg?.url),
                      price: r?.price,
                      categoryId: r?.category?.id
                    })
                  }
                  key={`r-${r?.id}`}
                >
                  <Image style={styles.familiarItem} source={{ uri: r?.galleries[0]?.url }} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        ) : null}
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height - 350,
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
  },
  familiar: {
    gap: 16,
    marginBottom: 30
  },
  familiarItem: {
    width: 54,
    height: 54,
    borderRadius: 8
  }
});
