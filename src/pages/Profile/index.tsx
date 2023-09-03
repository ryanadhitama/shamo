/* eslint-disable react/react-in-jsx-scope */
import { Avatar, Logout } from '@assets';
import { Header } from '@components';
import AsyncStorage from '@react-native-community/async-storage';
import { colors, getData } from '@utils';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = ({ navigation }: any) => {
  const signOut = () => {
    Alert.alert('Logout', 'Are you sure want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => {
          AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
            navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] });
          });
        }
      }
    ]);
  };

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
        prefix={
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{ width: 54, height: 54, backgroundColor: '#38ABBE', borderRadius: 27 }}>
            <Avatar />
          </View>
        }
        suffix={
          <TouchableOpacity onPress={() => signOut()}>
            <Logout />
          </TouchableOpacity>
        }
        title={`Halo, ${user?.name}`}
        desc={`@${user?.username}`}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  }
});
