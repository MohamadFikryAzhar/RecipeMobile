import {initialState} from '../config/InitState';

export const loginReducer = (state = initialState, action) => {
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
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                data: null,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        default:
            return state;
    }
}

export const registerReducer = (state = initialState, action) => {
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
                isError: false,
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

export const editUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'EDIT_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'EDIT_USER_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'EDIT_USER_FAILED':
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

export const getUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_USER_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                errorMessage: ''
            }
        case 'GET_USER_FAILED':
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