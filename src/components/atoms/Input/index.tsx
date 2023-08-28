import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colors, fonts } from '../../../utils';

interface InputType {
  label: string;
  placeholder?: string;
  value?: any;
  onChangeText?: any;
  secureTextEntry?: any;
  disable?: boolean;
}

const Input = ({
  placeholder,
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable
}: InputType) => {
  const [border, setBorder] = useState(colors.input);
  const onFocusForm = () => {
    setBorder('#46435C');
  };
  const onBlurForm = () => {
    setBorder(colors.input);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor="#504F5E"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border?: string) => ({
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: border ? border : colors.input,
    borderRadius: 10,
    padding: 15,
    fontFamily: fonts.primary.normal,
    fontSize: 14
  }),
  label: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 12,
    fontFamily: fonts.primary[500]
  }
});
