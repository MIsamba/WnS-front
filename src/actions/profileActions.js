import axios from 'axios'
import {
    PROFILE_LIST_REQUEST,
    PROFILE_LIST_SUCCESS,
    PROFILE_LIST_FAIL,

    PROFILE_DETAILS_REQUEST,
    PROFILE_DETAILS_SUCCESS,
    PROFILE_DETAILS_FAIL,

    PROFILE_DELETE_REQUEST,
    PROFILE_DELETE_SUCCESS,
    PROFILE_DELETE_FAIL,

    PROFILE_CREATE_REQUEST,
    PROFILE_CREATE_SUCCESS,
    PROFILE_CREATE_FAIL,

    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,

    PROFILE_CREATE_REVIEW_REQUEST,
    PROFILE_CREATE_REVIEW_SUCCESS,
    PROFILE_CREATE_REVIEW_FAIL,


    PROFILE_TOP_REQUEST,
    PROFILE_TOP_SUCCESS,
    PROFILE_TOP_FAIL,

} from '../constants/profileConstants'

export const listProfiles = () => async (dispatch) => {
    try{
        dispatch({type: PROFILE_LIST_REQUEST})

        const { data } = await axios.get(`/api/profiles/`)

        dispatch({
            type:  PROFILE_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PROFILE_LIST_FAIL,
            payload: error.response && error.response.data.message
            ?error.response.data.message
            :error.message,
        })

    }
}



export const listProfileDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PROFILE_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/profiles/${id}`)

        dispatch({
            type: PROFILE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PROFILE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deleteProfile = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROFILE_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/profiles/delete/${id}/`,
            config
        )

        dispatch({
            type: PROFILE_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: PROFILE_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}






export const createProfile = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROFILE_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/profiles/create/`,
            {},
            config
        )
        dispatch({
            type: PROFILE_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PROFILE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



