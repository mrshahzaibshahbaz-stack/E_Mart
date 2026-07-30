import { FlatList, Modal, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookCard from '../components/BookCard';
import { deleteBookByID, getListOfBooks } from '../api/http';
import AddButton from '../components/AddButton';
import AddBookScreen from './AddBookScreen';

interface Book {
  id: number | string;
  title: string;
  name_of_author: string;
  price_of_book: string;
  cover: string;
}

const HomeScreen = () => {
  const [booklist, setBookList] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Book | undefined>(undefined);

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: (books: Book[]) => {
        setBookList(books);
        setLoading(false);
      },
      onError: (err: Error) => {
        console.log('Error fetching books:', err);
        setError('Failed to load books. Please try again.');
        setLoading(false);
      },
    });
  };

  useEffect(() => {
    getListOfBooksFN();
  }, []);

  const onDeleteItem = (item: Book) => {
    console.log('Item :', item);
    deleteBookByID({
      onSuccess: () => {
        getListOfBooksFN();
      },
      onError: (error: Error) => console.log(error),
      itemID: item.id,
    });
  };

  const onEditItem = (item: Book) => {
    setModalVisible(true);
    setSelectedItem(item);
  };

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
            onDeleteItem={() => onDeleteItem(item)}
            onEditItem={() => onEditItem(item)}
          />
        )}
      />
      <AddButton
        onPress={() => {
          setModalVisible(true);
          setSelectedItem(undefined);
        }}
      />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen
          onCloseIconPress={() => setModalVisible(false)}
          onCreateSuccess={() => getListOfBooksFN()}
          selectedItem={selectedItem}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
