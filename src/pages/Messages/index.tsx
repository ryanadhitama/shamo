import { AppHeader, Empty } from '@components';
import { colors } from '@utils';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Text } from 'react-native-svg';

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Message Support" />
      <FlatList
        style={styles.list}
        data={[]}
        renderItem={({ item }: any) => <Text>{item?.title}</Text>}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Empty title="Opss no message yet?" desc="You have never done a transaction" />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  list: {
    backgroundColor: colors.bg.secondary,
    flex: 1
  },
  listContent: { flexGrow: 1 },
  empty: {
    flex: 1,
    justifyContent: 'center'
  }
});
