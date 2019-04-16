import axios from 'axios';

export const getLoginCheck = (action) =>{
    console.log("action = ",action)
    return axios({
        method: 'POST',
        url: `${action.url}`,
        data: action.body ? action.body: null,
        headers:{
            'Content-Type': 'application/json'
        } 
    })
}