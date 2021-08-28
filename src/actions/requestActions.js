/*import axios from 'axios'
import {
    REQUEST_ADD_ITEM,
    REQUEST_REMOVE_ITEM,
    REQUEST_SAVE_SHIPPING_ADDRESS,

    REQUEST_SAVE_PAYMENT_METHOD,
} from '../constants/requestConstants'


export const addRequest = (id,urgency) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/profiles/${id}`)

    dispatch({
        type: REQUEST_ADD_ITEM,
        payload: {
            profile: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            urgency
        }
    })
 localStorage.setItem('requestItems', JSON.stringify(getState().request.requestItems))
}

export const removeFromRequest = (id) => (dispatch,getState) =>{
    dispatch({
        type: REQUEST_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('requestItems', JSON.stringify(getState().request.requestItems))

}

*/
