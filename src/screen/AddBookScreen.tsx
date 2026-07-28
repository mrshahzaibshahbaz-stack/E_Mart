import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';

const AddBookScreen = ({onCloseIconPress}: {onCloseIconPress: () => void}) => {
  return (
    <SafeAreaView>
      <Icon name="xmark-circle" size={30} color="#e81d1d" onPress={onCloseIconPress}/>
    </SafeAreaView>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({});
