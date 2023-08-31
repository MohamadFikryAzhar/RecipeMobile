import axios from "axios";
import {BASE_URL} from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

const instanceServe = axios.create({
  baseURL: `${BASE_URL}`
});

instanceServe.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error(error);
  }

  return config;
})

export {instanceServe, initialState}