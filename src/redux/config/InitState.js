import localStorage from "@react-native-async-storage/async-storage";

export const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ''
};

export const headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
}

export const addRecipeHeader = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
}