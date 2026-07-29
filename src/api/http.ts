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

export const deleteBookByID = async ({onSuccess, onError, itemID}) => {
  try {
    const response = await axios.delete(`${endpointURl}/${itemID}`);
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error);
  }
};



export const createBook = async ({onSuccess, onError, body}) => {
  try {
    const response = await axios.post(endpointURl, body);
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error);
  }
};

export const updateBook = async ({onSuccess, onError, body, ID}) => {
  try {
    const response = axios.put(`${endpointURl}/${ID}`, body);
    onSuccess && onSuccess(response)
  } catch (error) {
    onError && onError(error)
    console.log(error);
  }
};
