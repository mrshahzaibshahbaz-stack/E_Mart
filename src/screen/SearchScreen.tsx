import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Icon name="magnifying-glass" size={60} color="#1273DE" solid />
        <Text style={styles.title}>Search</Text>
        <Text style={styles.subtitle}>Find your favorite books here</Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});