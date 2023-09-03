/* eslint-disable react/react-in-jsx-scope */
import { Avatar } from '@assets';
import { Header } from '@components';
import { colors, getData } from '@utils';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }: any) => {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    navigation.addListener('focus', () => {
      getData('userProfile').then((res) => {
        setUser(res);
      });
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        suffix={
          <View style={{ backgroundColor: '#38ABBE', borderRadius: 27 }}>
            <Avatar />
          </View>
        }
        title={`Halo, ${user?.name}`}
        desc={`@${user?.username}`}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  }
});
