/* eslint-disable react/react-in-jsx-scope */
import { Avatar, ChevronRight, Logout } from '@assets';
import { Header } from '@components';
import AsyncStorage from '@react-native-community/async-storage';
import { colors, fonts, getData } from '@utils';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

  const menu = [
    {
      title: 'Account',
      items: [
        {
          title: 'Edit Profile',
          onClick: () => navigation.navigate('EditProfile')
        },
        {
          title: 'Your Orders',
          onClick: () => {}
        },
        {
          title: 'Help',
          onClick: () => {}
        }
      ]
    },
    {
      title: 'General',
      items: [
        {
          title: 'Privacy & Policy',
          onClick: () => {}
        },
        {
          title: 'Term of Service',
          onClick: () => {}
        },
        {
          title: 'Rate App',
          onClick: () => {}
        }
      ]
    }
  ];

  function getFirstWord(str: string) {
    let spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substring(0, spaceIndex);
  }
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
        title={`Halo, ${user?.name && getFirstWord(user?.name)}`}
        desc={`@${user?.username}`}
      />
      <View style={styles.content}>
        {menu?.map((m) => (
          <View style={styles.menu} key={`m-${m?.title}`}>
            <Text style={styles.menuTitle}>{m?.title}</Text>
            {m?.items?.map((item, i) => (
              <TouchableOpacity
                onPress={item?.onClick}
                style={styles.menuItem}
                key={`m-${m?.title}-${i}`}
              >
                <Text style={styles.menuItemText}>{item?.title}</Text>
                <ChevronRight />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    flex: 1,
    backgroundColor: '#242231',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  menu: {
    marginBottom: 30
  },
  menuItem: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuItemText: {
    color: '#999999',
    fontSize: 15,
    fontFamily: fonts.primary.normal
  },
  menuTitle: {
    marginBottom: 16,
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.primary[600]
  }
});
