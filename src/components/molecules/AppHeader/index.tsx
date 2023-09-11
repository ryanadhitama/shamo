import React, { ReactNode } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { fonts, colors } from '@utils';

export type HeaderProps = {
  title?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
};

const AppHeader = ({
  title,
  suffix,
  prefix
}: HeaderProps & {
  type?: string;
}) => {
  return (
    <View style={styles.container}>
      {prefix && prefix}
      <Text style={styles.title}>{title}</Text>
      {suffix && suffix}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: colors.secondary,
    height: 87,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    width: Dimensions.get('window').width,
    marginTop: 30,
    position: 'absolute',
    alignSelf: 'center',
    letterSpacing: 0.18,
    fontSize: 18,
    fontFamily: fonts.primary[500],
    textTransform: 'capitalize',
    color: colors.white,
    textAlign: 'center',
    zIndex: -1
  }
});
