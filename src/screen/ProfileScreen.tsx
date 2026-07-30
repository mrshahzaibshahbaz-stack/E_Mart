import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Icon name="user" size={60} color="#1273DE" solid />
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Manage your account here</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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