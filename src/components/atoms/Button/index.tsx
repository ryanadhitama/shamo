import { colors, fonts } from '@utils';
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

type ButtonProps = {
  title?: string;
  type?: string;
  onPress?: () => void;
  disable?: boolean;
};

const Button = ({ type, title, onPress, disable }: ButtonProps) => {
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={ContainerStyles(type as string)} onPress={onPress}>
      <Text style={TextStyles(type as string)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const ContainerStyles = (): ViewStyle => ({
  backgroundColor: colors.primary,
  paddingVertical: 13,
  borderRadius: 12
});

const TextStyles = (): TextStyle => ({
  fontSize: 16,
  fontFamily: fonts.primary[500],
  textAlign: 'center',
  color: colors.white
});

const styles = StyleSheet.create({
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10
    // backgroundColor: colors.button.disable.background
  },
  disableText: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center'
    // color: colors.button.disable.text
  }
});
