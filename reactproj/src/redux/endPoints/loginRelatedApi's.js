import axios from 'axios';

export const getLoginCheck = (action) =>{
    console.log("action = ",action)
    return axios({
        method: 'POST',
        url: `${action.url}`,
        params: action.body ? action.body: null,
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        } 
    })
}