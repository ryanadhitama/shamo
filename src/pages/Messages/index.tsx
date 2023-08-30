import { AppHeader } from '@components';
import { colors } from '@utils';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Message Support" />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  }
});
