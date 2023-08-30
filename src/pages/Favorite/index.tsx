import { AppHeader } from '@components';
import { colors } from '@utils';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Favorite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Favorite Shoes" />
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  }
});
