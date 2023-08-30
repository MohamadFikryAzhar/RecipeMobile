import axios from "axios";
import {BASE_URL} from '@env';

export const loginAction = (data) =>
    async (dispatch) => {
        dispatch({type: 'LOGIN_PENDING'})
        axios.post(`${BASE_URL}/login`, data)
            .then(result => {
                dispatch({type: 'LOGIN_SUCCESS', payload: result.data.data})
            })
            .catch(err => {
                dispatch({type: 'LOGIN_FAILED', payload:err.response.data.message})
                console.error(err.message)
            })
    }

export const registerAction = (data) =>
    async (dispatch) => {
        dispatch({type: 'REGISTER_PENDING'})
        axios.post(`${BASE_URL}/register`, data)
            .then(result => {
                dispatch({type: 'REGISTER_SUCCESS', payload: result.data.data})
            })
            .catch(err => {
                dispatch({type: 'REGISTER_FAILED', payload: err.response.data.message})
            })
    }

export const logoutAction = () =>
    async (dispatch) => {
        dispatch({type: 'LOGOUT_SUCCESS'})
    }