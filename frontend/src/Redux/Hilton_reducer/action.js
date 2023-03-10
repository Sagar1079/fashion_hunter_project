import * as types from "./actiontypes"
import axios from "axios";
import { serverUrl } from "../../App";

export const getRegistration = (data) => (dispatch) => {
    dispatch({ type: types.REGISTRATION_REQUEST })
    return axios.post(`${serverUrl}/user/register`, data)
        .then((res) => {
            
           return dispatch({ type: types.REGISTRATION_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.REGISTRATION_FAILURE })
        })
}



export const getLogin = (data) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    return axios.post(`${serverUrl}/user/login`, data)
        .then((res) => {
            
           return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.LOGIN_FAILURE })
        })
}


export const verifyOtp = (data) => (dispatch) => {
    dispatch({ type: types.OTP_REQUEST })
    return axios.post(`${serverUrl}/user/verifyotp`, data)
        .then((res) => {
            
          return  dispatch({ type: types.OTP_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.OTP_FAILURE })
        })
}


export const resendOtp = (data) => (dispatch) => {
    dispatch({ type: types.OTP_REQUEST })
    return axios.post(`${serverUrl}/user/resendotp`, data)
        .then((res) => {
            
          return  dispatch({ type: types.OTP_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.OTP_FAILURE })
        })
}
