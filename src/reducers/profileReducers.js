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
    PROFILE_CREATE_RESET,

    PROFILE_UPDATE_REQUEST,
    PROFILE_UPDATE_SUCCESS,
    PROFILE_UPDATE_FAIL,
    PROFILE_UPDATE_RESET,

    PROFILE_CREATE_REVIEW_REQUEST,
    PROFILE_CREATE_REVIEW_SUCCESS,
    PROFILE_CREATE_REVIEW_FAIL,
    PROFILE_CREATE_REVIEW_RESET,

    PROFILE_TOP_REQUEST,
    PROFILE_TOP_SUCCESS,
    PROFILE_TOP_FAIL,
    } from '../constants/profileConstants'

export const profileListReducer = (state = {profiles: []}, action) => {
    switch (action.type) {
        case PROFILE_LIST_REQUEST:
            return { loading: true, profiles: []}

        case PROFILE_LIST_SUCCESS:
            return { loading: false,
                     profiles: action.payload.profiles
                    }

    
        case PROFILE_LIST_FAIL:
                return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const profileDetailsReducer = (state = { profile: { reviews: [] } }, action) => {
    switch (action.type) {
        case PROFILE_DETAILS_REQUEST:
            return { loading: true, ...state }

        case PROFILE_DETAILS_SUCCESS:
            return { loading: false, profile: action.payload }

        case PROFILE_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const profileDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_DELETE_REQUEST:
            return { loading: true }

        case PROFILE_DELETE_SUCCESS:
            return { loading: false, success: true }

        case PROFILE_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



export const profileCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_CREATE_REQUEST:
            return { loading: true }

        case PROFILE_CREATE_SUCCESS:
            return { loading: false, success: true, profile: action.payload }

        case PROFILE_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case PROFILE_CREATE_RESET:
            return {}

        default:
            return state
    }
}


export const profileUpdateReducer = (state = { profile: {} }, action) => {
    switch (action.type) {
        case PROFILE_UPDATE_REQUEST:
            return { loading: true }

        case PROFILE_UPDATE_SUCCESS:
            return { loading: false, success: true, profile: action.payload }

        case PROFILE_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case PROFILE_UPDATE_RESET:
            return { product: {} }

        default:
            return state
    }
}



export const profileReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PROFILE_CREATE_REVIEW_REQUEST:
            return { loading: true }

        case PROFILE_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }

        case PROFILE_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        case PROFILE_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}


export const profileTopRatedReducer = (state = { profiles: [] }, action) => {
    switch (action.type) {
        case PROFILE_TOP_REQUEST:
            return { loading: true, profiles: [] }

        case PROFILE_TOP_SUCCESS:
            return { loading: false, profiles: action.payload, }

        case PROFILE_TOP_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}



