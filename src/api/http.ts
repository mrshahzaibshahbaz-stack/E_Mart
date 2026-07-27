import axios from 'axios';
import { Alert } from 'react-native';

const endpointURl = 'https://6a610966da10c59c18095948.mockapi.io/books';
export const getListOfBooks = async ({onSuccess, onError}) => {
  try {
    const response = await axios.get(endpointURl);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log('An Error Occurred', error);
  }
  return getListOfBooks;
};

export const getBookByID = async ({onSuccess, onError}) => {
  try {
    const response = await axios.get(`${endpointURl}/3`);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log('An Error Occurred', error);
  }
};

export const deleteBookByID = async ({onSuccess, onError}) => {
  try {
    const response = await axios.delete(`${endpointURl}/10`);
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error);
  }
};

export const body = {
  createdAt: '2026-07-22T03:17:46.399Z',
  name_of_author: 'Last Book',
  cover:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bag2nGpSlRa72llzjh2paRmi9jdYW3ay6vgECKuZpw&s',
  price_of_book: '110',
  email_of_seller: 'iqbal43@gmail.com',
};

export const createBook = async ({onSuccess, onError}) => {
  try {
    const response = await axios.post(endpointURl, body);
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error);
  }
};

export const updateBook = async ({onSuccess, onError}) => {
  try {
    const response = axios.put(`${endpointURl}/7`, body);
    onSuccess && onSuccess(response)
  } catch (error) {
    onError && onError(error)
    console.log(error);
  }
};
