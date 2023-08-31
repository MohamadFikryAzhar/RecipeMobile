import axios from "axios";
import {BASE_URL} from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginAction = (data, navigate) =>
    async (dispatch) => {
        dispatch({type: 'LOGIN_PENDING'})
        axios.post(`${BASE_URL}/login`, data)
            .then(result => {
                AsyncStorage.setItem("token", result.data.accesstoken);
                AsyncStorage.setItem("name", result.data.data.name);
                AsyncStorage.setItem("email", result.data.data.email);
                AsyncStorage.setItem("photo", result.data.data.photo);
                navigate('Main')
                dispatch({type: 'LOGIN_SUCCESS', payload: result.data.data})
            })
            .catch(err => {
                navigate('Login')
                dispatch({type: 'LOGIN_FAILED', payload:err.response.data.message})
                console.error(err.message)
            })
    }

export const registerAction = (data, navigate) =>
    async (dispatch) => {
        dispatch({type: 'REGISTER_PENDING'})
        axios.post(`${BASE_URL}/register`, data)
            .then(result => {
                navigate('Login')
                dispatch({type: 'REGISTER_SUCCESS', payload: result.data.data})
            })
            .catch(err => {
                navigate('Register')
                dispatch({type: 'REGISTER_FAILED', payload: err.response.data.message})
            })
    }

export const logoutAction = () =>
    async (dispatch) => {
        dispatch({type: 'LOGOUT_SUCCESS'})
    }