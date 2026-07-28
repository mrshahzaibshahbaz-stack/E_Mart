import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6'; 
const AddButton = ({onPress}: {onPress: ()=> void}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <Icon name="plus" size={30} color="#fff" solid /> 
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    backgroundColor: '#1273DE',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: Platform.OS === "android" ? 30 : 0
  },
});
