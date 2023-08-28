import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { colors, fonts } from '../../../utils';
import Gap from '../Gap';

interface InputType {
  label: string;
  placeholder?: string;
  value?: any;
  onChangeText?: any;
  secureTextEntry?: any;
  disable?: boolean;
  prefix?: any;
}

const Input = ({
  placeholder,
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  prefix
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
      <View style={styles.bg(border)}>
        {prefix ? prefix : null}
        {prefix ? <Gap width={12} /> : null}
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disable}
          selectTextOnFocus={!disable}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor="#504F5E"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  bg: (border?: string) => ({
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: border ? border : colors.input,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  }),
  input: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.white,
    flex: 1
  },
  label: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 12,
    fontFamily: fonts.primary[500]
  }
});
