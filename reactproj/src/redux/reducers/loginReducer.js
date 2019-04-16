import { SET_LOGIN } from "../actions/actionTypes";

const initialState = {}
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state, loginData: action.payload };
        default:
            return state;
    }
}