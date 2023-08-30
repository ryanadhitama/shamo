import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, colors } from '@utils';

export type HeaderProps = {
  title?: string;
};

const AppHeader = ({
  title
}: HeaderProps & {
  type?: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: colors.secondary
  },
  title: {
    letterSpacing: 0.18,
    fontSize: 18,
    fontFamily: fonts.primary[500],
    textTransform: 'capitalize',
    color: colors.white,
    textAlign: 'center'
  }
});
