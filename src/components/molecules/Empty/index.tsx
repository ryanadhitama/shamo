import { Headset, Love } from '@assets';
import { colors, fonts } from '@utils';
import Button from '../../atoms/Button';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type EmptyProps = {
  title?: string;
  desc?: string;
  type?: string;
};

const Empty = ({ title, desc, type }: EmptyProps) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const Icon = () => {
    if (type === 'love') {
      return <Love />;
    }

    return <Headset />;
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.button}>
        <Button title="Explore Store" />
      </View>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    alignItems: 'center'
  },
  title: {
    fontFamily: fonts.primary[500],
    color: colors.white,
    fontSize: 18,
    marginTop: 24,
    marginBottom: 12
  },
  desc: {
    fontFamily: fonts.primary.normal,
    color: colors.text.tertiary,
    fontSize: 14,
    marginBottom: 20
  },
  button: {
    width: 152
  }
});
