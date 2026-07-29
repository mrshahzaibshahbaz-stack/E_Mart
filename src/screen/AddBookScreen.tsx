import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { createBook, updateBook } from '../api/http';

interface Book {
  id: number | string;
  title: string;
  name_of_author: string;
  price_of_book: string;
  cover: string;
}

const AddBookScreen = ({
  onCloseIconPress,
  onCreateSuccess,
  selectedItem,
}: {
  onCloseIconPress: () => void;
  onCreateSuccess: () => void;
  selectedItem?: Book;
}) => {
  const [authorName, setAuthorName] = useState(
    selectedItem?.name_of_author ?? '',
  );
  const [coverURL, setCoverURL] = useState(selectedItem?.cover ?? '');
  const [price, setPrice] = useState(selectedItem?.price_of_book ?? '');

  const createNewBook = () => {
    createBook({
      body: {
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL,
      },
      onSuccess: () => {
        onCloseIconPress();
        onCreateSuccess();
      },
      onError: (err: Error) => {
        Alert.alert('Error Happen:');
      },
    });
  };

  const editBook = () => {
    updateBook({
      onSuccess: () => {
        onCloseIconPress();
        onCreateSuccess();
      },
      onError: (err: Error) => {
        Alert.alert('Error Happen');
      },
      body: {
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL,
      },
      ID: selectedItem?.id,
    });
  };

  return (
    <SafeAreaView>
      <Icon
        name="xmark-circle"
        size={30}
        color="#e81d1d"
        onPress={onCloseIconPress}
      />
      <View style={styles.body}>
        <Text style={styles.title}>Book Details</Text>
        <AppTextInput
          value={authorName}
          onChangeText={setAuthorName}
          placeholder={'Author Name'}
          keyboardType={'string'}
        />
        <AppTextInput
          value={coverURL}
          onChangeText={setCoverURL}
          placeholder={'Cover Image'}
          keyboardType={'string'}
        />
        <AppTextInput
          value={price}
          onChangeText={setPrice}
          placeholder={'Book Price'}
          keyboardType={'numeric'}
        />
        <AppButton onPress={!!selectedItem ? editBook : createNewBook} />
      </View>
    </SafeAreaView>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
});
