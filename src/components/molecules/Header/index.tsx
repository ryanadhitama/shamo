import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, colors } from '@utils';

export type HeaderProps = {
  title?: string;
  desc?: string;
  suffix?: ReactNode;
  prefix?: ReactNode;
};

const Header = ({
  title,
  desc,
  suffix,
  prefix
}: HeaderProps & {
  type?: string;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {prefix && prefix}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
      {suffix ? suffix : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  }
});
