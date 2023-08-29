import AsyncStorage from "@react-native-async-storage/async-storage";

type initStateType = {
  data: [],
  isLoading: boolean,
  isError: boolean,
  errorMessage: string,
}

export const initialState: initStateType = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

export const headers: any = {
  Authorization: AsyncStorage.getItem("token")
}