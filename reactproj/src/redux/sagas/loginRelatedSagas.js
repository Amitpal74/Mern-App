import {put, call } from "redux-saga/effects";
import * as actions from '../actions';
import { getLoginCheck } from "../endPoints/loginRelatedApi's" 

export function* getLogin(action){
    try{
            let response = null;
            response = yield call(getLoginCheck, action.payload)

            if(response){
                yield put(actions.setLogin)
            }
    }catch(err){
        console.log(err);
        
    }
}