import axios from "axios";
import {BASE_URL} from '@env';
import { AnyAction, Dispatch } from "redux";
import { loginDataType, registerDataType } from "../config/LoginState";

export const loginAction = async (data: loginDataType, navigate: any) =>
    async (dispatch: Dispatch<AnyAction>) => {
        try {
            dispatch({type: 'LOGIN_PENDING'})
            const result = await axios.post(`${BASE_URL}/login`, data)
            
            dispatch({type: 'LOGIN_SUCCESS', payload: result.data})
            navigate('Main')
        } catch(err: any){
            console.error(err.message)
            dispatch({type: 'LOGIN_FAILED', payload:err.response.data.message})
        }
    }

export const registerAction = async (data: registerDataType, navigate: any) =>
    async (dispatch: Dispatch) => {
        try {
            dispatch({type: 'REGISTER_PENDING'})

            const result = await axios.post(`${BASE_URL}/register`, data);
            dispatch({payload: result.data.data, type: 'REGISTER_SUCCESS'})
            navigate('/Login')
        } catch (error: any) {
            dispatch({type: 'REGISTER_FAILED', payload: error.response.data.message})
            console.error(error.message);
        }
    }