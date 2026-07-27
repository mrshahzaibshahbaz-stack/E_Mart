import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const BookCard = ({ title, price, authName, imageUrl }) => {
  return (
    <View style={styles.container}>
      {/* Image View */}
      <Image
        source={{ uri: imageUrl }}
        style={styles.coverImage}
        onError={e => console.log('Image Error:', e.nativeEvent.error)}
        onLoadStart={() => console.log('Loading started')}
        onLoad={() => console.log('Image loaded successfully')}
      />
      {/*  Book Detials */}
      <View style={styles.detialContainer}>
        <Text style={styles.bookName}>{title}</Text>
        <Text style={styles.authName}>{authName}</Text>
        <Text style={styles.bookPrice}>$ {price}</Text>
      </View>
      {/* Delete and Edit Container */}
      <View style={styles.deleteEditContainer}>
        <TouchableOpacity style={styles.circleButton}>
          <Icon name="trash" size={15} color="#F44336" solid />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
          <Icon name="pen-to-square" size={15} color="#2196F3" solid />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  coverImage: {
    height: 130,
    width: '25%',
    borderRadius: 8,
    resizeMode: 'stretch',
  },
  detialContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  bookName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  authName: {
    fontSize: 14,
    color: '#888',
    marginVertical: 3,
  },
  bookPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#24a',
  },
  deleteEditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  circleButton: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 8,
  },
});
