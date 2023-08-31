import axios from "axios";
import {BASE_URL} from '@env';
import {addRecipeHeader, headers} from '../config/InitState'

export const getAllRecipeAction = (page = 1, limit = 5) => 
    async (dispatch) => {
        try {
            dispatch({type: 'GET_RECIPES_PENDING'})
            const result = await axios.get(`${BASE_URL}/recipe/main?page=${page}&limit=${limit}`)
            dispatch({payload: result.data.data, type: 'GET_RECIPES_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'GET_RECIPES_FAILED'})
            console.error(error.message);
        }
    }

export const getUserRecipeAction = (user = '', offset = 1) => 
    async (dispatch) => {
        try {
            dispatch({type: 'USER_RECIPES_PENDING'})
            const result = await axios.get(`${BASE_URL}/recipe/user?user_name=${user}&page=${offset}&limit=5`, {headers})
            dispatch({payload: result.data.data, type: 'USER_RECIPES_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'USER_RECIPES_FAILED'})
            console.error(error.message);
        }
    }

export const getRecipeAction = (id, headers) => 
    async (dispatch) => {
        try {
            dispatch({type: 'GET_RECIPE_PENDING'})
            const result = await axios.get(`${BASE_URL}/recipe/${id}/detail`, headers)
            dispatch({payload: result.data.data, type: 'GET_RECIPE_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'GET_RECIPE_FAILED'})
            console.error(error.message);
        }
    }

export const searchRecipeAction = (data) => 
    async (dispatch) => {
        try {
            dispatch({type: 'GET_RECIPES_PENDING'})
            const result = await axios.get(`${BASE_URL}/recipe?search=${data}`)
            dispatch({payload: result.data.data, type: 'GET_RECIPES_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'GET_RECIPES_FAILED'})
            console.error(error.message);
        }
    }

export const sortingRecipeAction = (sortBy = '', sort = '') => 
    async (dispatch) => {
        try {
            dispatch({type: 'GET_RECIPES_PENDING'})
            const result = await axios.get(`${BASE_URL}/recipe?sortBy=${sortBy}&sort=${sort}`)
            dispatch({payload: result.data.data, type: 'GET_RECIPES_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'GET_RECIPES_FAILED'})
            console.error(error.message);
        }
    }

export const categorizedRecipeAction = (category = '') => 
    async (dispatch) => {
        try {
            dispatch({type: 'GET_RECIPES_PENDING'})
            const result = await axios.get(`${BASE_URL}/recipe/category?category=${category}`)
            dispatch({payload: result.data.data, type: 'GET_RECIPES_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'GET_RECIPES_FAILED'})
            console.error(error.message);
        }
    }

export const postRecipeAction = (data, headers) => 
    async (dispatch) => {
        try {
            dispatch({type: 'POST_RECIPE_PENDING'})
            const result = await axios.post(`${BASE_URL}/recipe`, data, headers)
            dispatch({payload: result.data.data, type: 'POST_RECIPE_SUCCESS'})
        } catch (error) {
            console.error(error);
            dispatch({payload: error.response.data.data.message, type: 'POST_RECIPE_FAILED'})
        }
    }

export const updateRecipeAction = (data, id, headers) => 
    async (dispatch) => {
        try {
            dispatch({type: 'UPDATE_RECIPE_PENDING'})
            const result = await axios.put(`${BASE_URL}/recipe/${id}`, data, headers)
            dispatch({payload: result.data.data, type: 'UPDATE_RECIPE_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'UPDATE_RECIPE_FAILED'})
            console.error(error.message);
        }
    }

export const deleteRecipeAction = (id, headers) => 
    async (dispatch) => {
        try {
            dispatch({type: 'DELETE_RECIPE_PENDING'})
            const result = await axios.delete(`${BASE_URL}/recipe/${id}`, headers)
            dispatch({payload: result.data.data, type: 'DELETE_RECIPE_SUCCESS'})
        } catch (error) {
            dispatch({payload: error.response.data.message, type: 'DELETE_RECIPE_FAILED'})
            console.error(error.message);
        }
    }