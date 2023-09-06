import {
  Chat,
  ChatActive,
  Home,
  HomeActive,
  Profile,
  ProfileActive,
  Union,
  UnionActive
} from '@assets';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type TabItemType = { title: string; active: boolean; onPress: () => void; onLongPress: () => void };

const TabItem = ({ title, active, onPress, onLongPress }: TabItemType) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    if (title === 'Home') {
      return active ? <HomeActive /> : <Home />;
    }
    if (title === 'Messages') {
      return active ? <ChatActive /> : <Chat />;
    }
    if (title === 'Favorite') {
      return active ? <UnionActive /> : <Union />;
    }
    if (title === 'Profile') {
      return active ? <ProfileActive /> : <Profile />;
    }
    return <Profile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: { alignItems: 'center' }
});
