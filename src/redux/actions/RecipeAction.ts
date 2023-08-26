import axios from "axios";
import {URL, headers, initialState} from './../config/initState';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {page: number, limit: number}>(
    'fetchAllRecipe',
    async ({page, limit}) => {
        try {
            const result = await axios.get(`${URL}/recipe/main?page=${page}&limit=${limit}`)
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message)
        }
    }
)

export const getUserRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {user: string, limit: number}>(
    'fetchUserRecipe',
    async ({user, limit}) => {
        try {
            const result = await axios.get(`${URL}/recipe/user?user_name=${user}&page=${limit}&limit=5`, {headers})
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message);
        }
    }
)

export const getRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {id: string}>(
    'fetchRecipeDetail',
    async ({id}) => {
        try {
            const result = await axios.get(`${URL}/recipe/${id}/detail`, {headers})
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message)
        }
    }
)

export const searchRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {data: any}>(
    'fetchSearchedRecipe',
    async ({data}) => {
        try {
            const result = await axios.get(`${URL}/recipe?search=${data}`)
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message);
        }
    }
)

export const sortingRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {sortBy: string, sort: any}>(
    'fetchSortedRecipe',
    async ({sortBy, sort}) => {
        try {
            const result = await axios.get(`${URL}/recipe?sortBy=${sortBy}&sort=${sort}`)
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message);
        }
    }
)

export const categorizedRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {category: string}>(
    'fetchCategorizedRecipe',
    async ({category}) => {
        try {
            const result = await axios.get(`${URL}/recipe/category?category=${category}`)
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message);
        }
    }
) 

export const postRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {data: any, navigate: any}>(
    'postRecipe',
    async ({data, navigate}) => {
        try {
            const result = await axios.post(`${URL}/recipe`, data, {headers})
            navigate('/account')
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message);
        }
    }
)

export const updateRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {data: any, id: string, navigate: any}>(
    'updateRecipe',
    async ({data, id, navigate}) => {
        try {
            const result = await axios.put(`${URL}/recipe/${id}`, data, {headers})
            navigate('/account')
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message);
        }
    }
)

export const deleteRecipeAction = createAsyncThunk<{initialState: typeof initialState}, {id: string, navigate: any}>(
    'deleteRecipe',
    async ({id, navigate}) => {
        try {
            const result = await axios.delete(`${URL}/recipe/${id}`, {headers})
            navigate('/recipe')
            return {
                initialState: result.data.data ?? []
            }
        } catch (error: any) {
            throw Error(error.message);
        }
    }
) 