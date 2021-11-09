import axios from 'axios';
import {REGISTER_SUCCESS, REGISTER_FAILED, UNEXPECTED_FAIL} from "./types";

// todo figure this out later

const apiLink = 'http://localhost:8000'

export const register = (username, phone, password, rePassword) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
    };

    const body = JSON.stringify({
        username, phone, password, rePassword
    })

    try {
        const res = await axios.post(`${apiLink}/registration`, body, config);
        if (res.data.error) {
            dispatch({
                type: REGISTER_FAILED
            })
        } else {
            dispatch({
                type: REGISTER_SUCCESS
            })
        }
    } catch (err) {
        dispatch({
            type: UNEXPECTED_FAIL
        })
    }
}