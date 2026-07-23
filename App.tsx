import axios from 'axios';
import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
  FlatList,
  Image,
} from 'react-native';

function App() {
  const [bookList, setBookList] = useState([]);

  const endpointURl = 'https://6a610966da10c59c18095948.mockapi.io/books';
  const getListOfBooks = async () => {
    try {
      const response = await axios.get(endpointURl);
      console.log(JSON.stringify(response.data, null, 3));
      setBookList(response.data);
    } catch (error) {
      console.log('An Error Occurred', error);
    }
    return getListOfBooks;
  };

  const getBookByID = async () => {
    try {
      const response = await axios.get(`${endpointURl}/3`);
      console.log(JSON.stringify(response.data, null, 3));
    } catch (error) {
      console.log('An Error Occurred', error);
    }
  };

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
      />
      <View style={styles.container}>
        <Text>Get List of Books</Text>
        <Button title="Get List of Books" onPress={getListOfBooks} />
        <Button title="Get Book by ID" onPress={getBookByID} />
        <FlatList
          data={bookList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.price_of_book}</Text>
              <Text>{item.name_of_author}</Text>
              <Image
                style={{
                  height: 150,
                  width: 150,
                }}
                source={{ uri: item.cover }}
              />
            </View>
          )}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
