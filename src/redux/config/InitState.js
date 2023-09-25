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
  {label: 'none', value: ''},
  {label: 'title', value: 'title'},
  {label: 'ingredients', value: 'ingredients'},
  {label: 'user_name', value: 'user_name'}
];

const sortOptions = [
  {label: 'none', value: ''},
  {label: 'A-Z', value: 'asc'},
  {label: 'Z-A', value: 'desc'}
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