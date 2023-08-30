import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

export const headers = {
  header: {
    Authorization: AsyncStorage.getItem("token")
  }
}