/* eslint-disable react/react-in-jsx-scope */
import { Avatar } from '@assets';
import { FeaturedCard, Gap, Header, ProductCard } from '@components';
import { colors, fonts, getData } from '@utils';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getNewestProducts, getPopularProducts } from 'redux/action';

const Home = ({ navigation }: any) => {
  const [user, setUser] = useState<any>();
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const { categories, popular, products } = useSelector((state: any) => state.homeReducer);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then((res) => {
        setUser(res);
      });
      setCategory('');
      dispatch(getCategories());
      dispatch(getPopularProducts());
      dispatch(getNewestProducts(''));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    dispatch(getNewestProducts(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  function getFirstWord(str: string) {
    let spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substring(0, spaceIndex);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          suffix={
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{ backgroundColor: '#38ABBE', borderRadius: 27 }}>
              <Avatar />
            </View>
          }
          title={`Halo, ${user?.name && getFirstWord(user?.name)}`}
          desc={`@${user?.username}`}
        />

        <ScrollView
          contentContainerStyle={styles.categoriesContent}
          style={styles.categories}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity onPress={() => setCategory('')}>
            <Text style={[styles.category, !category && styles.categoryActive]}>All Shoes</Text>
          </TouchableOpacity>

          {categories?.map((cat: any, i: number) => (
            <TouchableOpacity onPress={() => setCategory(cat?.id)} key={`tag-${i}`}>
              <Text style={[styles.category, category === cat?.id && styles.categoryActive]}>
                {cat?.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {category === '' && (
          <>
            <Gap height={30} />
            <View style={styles.content}>
              <Text style={styles.title}>Popular Products</Text>
            </View>
            <Gap height={14} />
            <ScrollView
              contentContainerStyle={styles.popularContent}
              style={styles.popular}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {popular?.map((product: any) => (
                <FeaturedCard
                  name={product?.name}
                  categoryId={product?.category?.id}
                  category={product?.category?.name}
                  price={product?.price}
                  image={product?.galleries[0]?.url}
                  description={product?.description}
                  id={product?.id}
                  key={`featured-${product?.id}`}
                />
              ))}
            </ScrollView>
          </>
        )}

        <Gap height={30} />
        <View style={styles.content}>
          <Text style={styles.title}>{category === '' ? 'New Arrivals' : 'For You'}</Text>
        </View>
        <Gap height={14} />
        <View style={styles.products}>
          {products?.map((product: any) => (
            <ProductCard
              name={product?.name}
              category={product?.category?.name}
              categoryId={product?.category?.id}
              price={product?.price}
              image={product?.galleries[0]?.url}
              description={product?.description}
              id={product?.id}
              key={`list-${product?.id}`}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    paddingHorizontal: 30
  },
  title: {
    color: colors.white,
    fontSize: 22,
    fontFamily: fonts.primary[600]
  },
  categories: {
    flexGrow: 0
  },
  categoriesContent: {
    gap: 16,
    paddingLeft: 30
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#302F37',
    color: colors.text.secondary,
    fontFamily: fonts.primary[500]
  },
  categoryActive: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    overflow: 'hidden',
    fontFamily: fonts.primary[500],
    borderColor: colors.primary,
    color: colors.white
  },
  popular: {
    flexGrow: 0
  },
  popularContent: {
    gap: 16,
    paddingLeft: 30
  },
  products: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    gap: 30
  }
});
