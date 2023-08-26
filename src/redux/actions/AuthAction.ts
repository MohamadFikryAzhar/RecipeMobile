import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { initialState } from "../config/initState";

export const loginAction = createAsyncThunk<{initialState: typeof initialState}, {data: any, navigate: any}>(
    'loginUser',
    async ({data, navigate}) => {
        try{
            const result = await axios.post(`${URL}/login`,data)

            AsyncStorage.setItem("token", result.data.accesstoken)
            AsyncStorage.setItem("name", result.data.data.name)
            AsyncStorage.setItem("email", result.data.data.email)
            AsyncStorage.setItem("photo", result.data.data.photo)

            navigate('/')

            return {
                initialState: result.data.data ?? [], 
            }
        } catch(err: any){
            throw Error(err.message)
        }
    }
)

export const registerAction = createAsyncThunk<{initialState: typeof initialState}, {data: any}>(
    'registerUser',
    async ({data}) => {
        try {
            const result = await axios.post(`${URL}/register`, data);
            
            return {
                initialState: result.data.data ?? [],
            }
        } catch (error: any) {
            throw Error(error.message);
        }
    }
)