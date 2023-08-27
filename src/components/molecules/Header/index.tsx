import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, colors } from '@utils';

export type HeaderProps = {
  title?: string;
  desc?: string;
};

const Header = ({
  title,
  desc
}: HeaderProps & {
  type?: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  title: {
    letterSpacing: 1.2,
    fontSize: 24,
    fontFamily: fonts.primary[600],
    textTransform: 'capitalize',
    color: colors.white
  },
  desc: {
    marginTop: 5,
    fontSize: 16,
    letterSpacing: 0.7,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary
  }
});
