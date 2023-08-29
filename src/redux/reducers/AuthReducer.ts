import {initialState} from './../config/InitState';

export const loginReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export const registerReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: true,
                errorMessage: ''
            }
        case 'REGISTER_FAILED':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default: 
            return state;
    }
}

export const logoutReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'LOGOUT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: true,
                errorMessage: ''
            }
        case 'LOGOUT_FAILED':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default: 
            return state;
    }
}