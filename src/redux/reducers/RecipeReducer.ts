import {initialState} from './../config/initState';

export const getAllRecipeReducer = (state: any = initialState, action: any) => {
    if (action.type === 'GET_RECIPES_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'GET_RECIPES_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'GET_RECIPES_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const getUserRecipeReducer = (state: any = initialState, action: any) => {
    if (action.type === 'USER_RECIPES_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'USER_RECIPES_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'USER_RECIPES_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const getRecipeReducer = (state: any = initialState, action: any) => {
    if (action.type === 'GET_RECIPE_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'GET_RECIPE_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'GET_RECIPE_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const postRecipeReducer = (state: any = initialState, action: any) => {
    if (action.type === 'POST_RECIPE_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'POST_RECIPE_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'POST_RECIPE_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const updateRecipeReducer = (state: any = initialState, action: any) => {
    if (action.type === 'UPDATE_RECIPE_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'UPDATE_RECIPE_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'UPDATE_RECIPE_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const deleteRecipeReducer = (state: any = initialState, action: any) => {
    if (action.type === 'DELETE_RECIPE_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'DELETE_RECIPE_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'DELETE_RECIPE_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}