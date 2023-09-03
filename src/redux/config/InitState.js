import axios from "axios";
import {BASE_URL} from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

const storageOptions = {
  skipBackup: true,
  path: 'images'
}

const sortByOptions = [
  {label: 'title', value: '1'},
  {label: 'ingredients', value: '2'},
  {label: 'user_name', value: '3'}
];

const sortOptions = [
  {label: 'A-Z', value: '1'},
  {label: 'Z-A', value: '2'}
];

const instanceServe = axios.create({
  baseURL: `${BASE_URL}`
});

instanceServe.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = "multipart/form-data";
    }
  } catch (error) {
    console.error(error)
  }

  return config;
})

const instanceUrl = axios.create({
  baseURL: `${BASE_URL}`
});

instanceUrl.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } catch (error) {
    console.error(error)
  }

  return config;
})

export {instanceServe, instanceUrl, initialState, storageOptions, sortOptions, sortByOptions};