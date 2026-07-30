import axios from 'axios';
import { Alert } from 'react-native';

const endpointURl = 'https://6a610966da10c59c18095948.mockapi.io/books';

interface Book {
  id: number | string;
  title: string;
  name_of_author: string;
  price_of_book: string;
  cover: string;
}

interface Callbacks<T = any> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export const getListOfBooks = async ({
  onSuccess,
  onError,
}: Callbacks<Book[]>) => {
  try {
    const response = await axios.get(endpointURl);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error as Error);
    console.log('An Error Occurred', error);
  }
  return getListOfBooks;
};

export const getBookByID = async ({ onSuccess, onError }: Callbacks<Book>) => {
  try {
    const response = await axios.get(`${endpointURl}/3`);
    console.log(JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error as Error);
    console.log('An Error Occurred', error);
  }
};

export const deleteBookByID = async ({
  onSuccess,
  onError,
  itemID,
}: Callbacks & { itemID: number | string }) => {
  try {
    const response = await axios.delete(`${endpointURl}/${itemID}`);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error as Error);
    console.log(error);
  }
};

export const createBook = async ({
  onSuccess,
  onError,
  body,
}: Callbacks<Book> & { body: Omit<Book, 'id'> }) => {
  try {
    const response = await axios.post(endpointURl, body);
    onSuccess && onSuccess(response.data);
  } catch (error) {
    onError && onError(error as Error);
    console.log(error);
  }
};

export const updateBook = async ({
  onSuccess,
  onError,
  body,
  ID,
}: Callbacks & { body: Omit<Book, 'id'>; ID: number | string | undefined }) => {
  try {
    const response = await axios.put(`${endpointURl}/${ID}`, body);
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error as Error);
    console.log(error);
  }
};