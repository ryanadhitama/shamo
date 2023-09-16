import { AppHeader, Empty } from '@components';
import { colors, fonts, getData, numberWithCommas } from '@utils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { geFavoriteProducts } from 'redux/action';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Favorite = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { favoriteProducts } = useSelector((state: any) => state.productReducer);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('wishlist').then((res: any) => {
        dispatch(geFavoriteProducts(res?.join(',')));
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <AppHeader title="Favorite Shoes" />
      <FlatList
        style={styles.list}
        data={favoriteProducts}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetail', {
                id: item?.id,
                name: item?.name,
                category: item?.category?.name,
                description: item?.description,
                image: [item?.galleries[0]?.url],
                price: item?.price,
                categoryId: item?.category?.id
              })
            }
          >
            <View style={styles.item}>
              <View>
                <View style={styles.itemLeft}>
                  <Image style={styles.itemImage} source={{ uri: item?.galleries[0]?.url }} />
                  <View>
                    <Text style={styles.title}>{item?.name}</Text>
                    <Text style={styles.price}>Rp{numberWithCommas(item?.price)}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Empty
              type="love"
              title=" You don't have dream shoes?"
              desc="Let's find your favorite shoes"
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  list: {
    backgroundColor: colors.bg.secondary,
    paddingVertical: 30,
    flex: 1
  },
  listContent: { flexGrow: 1 },
  empty: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: '#252836',
    borderRadius: 12,
    padding: 12,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 12
  },
  price: {
    color: '#2C96F1',
    fontSize: 14,
    fontFamily: fonts.primary.normal
  },
  title: {
    marginVertical: 2,
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 14,
    textTransform: 'uppercase'
  }
});
