import axios from "axios";
import { Alert } from "react-native";

  const endpointURl = 'https://6a610966da10c59c18095948.mockapi.io/books';
  const getListOfBooks = async () => {
    try {
      const response = await axios.get(endpointURl);
      console.log(JSON.stringify(response.data, null, 3));
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

  const deleteBookByID = async () => {
    try {
      const response = await axios.delete(`${endpointURl}/10`);
      Alert.alert('Book is delete Successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const body = {
    createdAt: '2026-07-22T03:17:46.399Z',
    name_of_author: 'Last Book',
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bag2nGpSlRa72llzjh2paRmi9jdYW3ay6vgECKuZpw&s',
    price_of_book: '110',
    email_of_seller: 'iqbal43@gmail.com',
  };

  const createBook = async () => {
    try {
      const response = await axios.post(endpointURl, body);
      Alert.alert('Book Added');
    } catch (error) {
      console.log(error);
    }
  };

  const updateBook = async () => {
    try {
      const response = axios.put(`${endpointURl}/7`, body);
      Alert.alert('Book Updated!');
    } catch (error) {
      console.log(error);
    }
  };

