import { AppHeader, Empty } from '@components';
import { colors } from '@utils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Favorite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Favorite Shoes" />
      <FlatList
        style={styles.list}
        data={[]}
        renderItem={({ item }: any) => <Text>{item?.title}</Text>}
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
    flex: 1
  },
  listContent: { flexGrow: 1 },
  empty: {
    flex: 1,
    justifyContent: 'center'
  }
});
