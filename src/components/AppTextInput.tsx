import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const AppTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...otherProps}
        placeholderTextColor={'#000'}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    width: '100%',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginBottom: 12,
  },
});
