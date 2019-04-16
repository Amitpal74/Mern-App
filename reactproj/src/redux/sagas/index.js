import { takeLatest } from "redux-saga/effects";  //takeEvery
import { GET_LOGIN } from "../actions/actionTypes";
import { getLogin } from './loginRelatedSagas';


export function* watchAppUser(){
    yield takeLatest(GET_LOGIN, getLogin)
}