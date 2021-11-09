import {REGISTER_FAILED, REGISTER_SUCCESS, UNEXPECTED_FAIL} from "../Connections/types";
const initialState = {
    isAuthenticated: null,
    username: '',
}

export default function (state = initialState, action){
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
            }
        case REGISTER_FAILED:
            return state
        default:
            return state
    }
}