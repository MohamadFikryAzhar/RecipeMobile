import AsyncStorage from "@react-native-async-storage/async-storage"

type stateType = {
  data: any,
  isLoading: boolean,
  isError: boolean,
  errorMessage: string
}

export const initialState: stateType = {
  data: null,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const URL = process.env.BASE_URL

export const headers = {
  Authorization: `Bearer ${AsyncStorage.getItem("token")}`
} 