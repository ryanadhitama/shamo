import { AppHeader } from '@components';
import { colors } from '@utils';
import { StyleSheet, View } from 'react-native';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Edit Profile" />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  }
});
