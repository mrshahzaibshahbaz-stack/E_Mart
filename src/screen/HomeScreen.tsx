import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookCard from '../components/BookCard';
import { getListOfBooks } from '../api/http';

const HomeScreen = () => {
  const [booklist, setBookList] = useState();

  useEffect(() => {
    getListOfBooks({
      onSuccess: books => setBookList(books),
      onError: err => console.log(err),
    });
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={booklist}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            title={item.name_of_author}
            price={item.price_of_book}
            authName={item.name_of_author}
            imageUrl={item.cover}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
