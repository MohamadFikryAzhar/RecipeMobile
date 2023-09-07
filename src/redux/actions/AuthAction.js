import axios from "axios";
import {BASE_URL} from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { instanceServe } from "../config/InitState";

export const loginAction = (data, navigate) => 
    async (dispatch) => { // jangan ditaruh di bawah
        dispatch({type: 'LOGIN_PENDING'})
        axios.post(`${BASE_URL}/login`, data)
            .then(result => {
                AsyncStorage.setItem("token", result.data.accesstoken);
                AsyncStorage.setItem("email", result.data.data.email);
                AsyncStorage.setItem("name", result.data.data.name);
                navigate('HomeRoute', {screen: 'Main'})
                dispatch({type: 'LOGIN_SUCCESS', payload: result.data.data})
                return result.data.data;
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
                return result.data.data;
            })
            .catch(err => {
                navigate('Register')
                dispatch({type: 'REGISTER_FAILED', payload: err.response.data.message})
            })
    }

export const editUserAction = (data, navigate) => 
    async (dispatch) => {
        dispatch({type: 'EDIT_USER_PENDING'})
        instanceServe.put(`${BASE_URL}/account`, data)
            .then(result => {
                navigate('Main')
                dispatch({type: 'EDIT_USER_SUCCESS', payload: result.data.data})
                return result.data.data;
            })
            .catch(err => {
                navigate('Register')
                dispatch({type: 'EDIT_USER_FAILED', payload: err.response.data.message})
            })
    }

export const getUserAction = () => 
    async (dispatch) => {
        dispatch({type: 'GET_USER_PENDING'})
        instanceServe.get(`${BASE_URL}/account`)
            .then(result => {
                dispatch({type: 'GET_USER_SUCCESS', payload: result.data.data})
                return result.data.data;
            })
            .catch(err => {
                dispatch({type: 'GET_USER_FAILED', payload: err.response.data.message})
            })
    }

export const logoutAction = (navigate) => 
    async (dispatch) => {
        dispatch({type: 'LOGOUT_SUCCESS'})
        navigate('Login')
    }