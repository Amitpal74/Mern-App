import { GET_LOGIN, SET_LOGIN } from './actionTypes'

export const getLogin = (obj) =>{
    console.log(obj);
    return {
        type: GET_LOGIN,
        payload: obj
    }
}

export const setLogin = (obj) =>{
    console.log(obj);
    return{
        type: SET_LOGIN,
        payload: obj
    }
}