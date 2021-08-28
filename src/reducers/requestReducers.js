/*import {
    REQUEST_ADD_ITEM,
    REQUEST_REMOVE,
    //CART_SAVE_SHIPPING_ADDRESS,

    //CART_SAVE_PAYMENT_METHOD,

    //CART_CLEAR_ITEMS,
} from '../constants/requestConstants'


export const requestReducer = (state = { requestItems: [] }, action) => {
    switch (action.type) {
        case REQUEST_ADD_ITEM:
            const item = action.payload
            const existItem = state.requestItems.find(x => x.profile === item.profile)

            if (existItem) {
                return {
                    ...state,
                    requestItems: state.requestItems.map(x =>
                        x.profile === existItem.profile ? item : x)
                }

            } else {
                return {
                    ...state,
                    requestItems: [...state.requestItems, item]
                }
            }
            default:
                return state
       
        }
}
*/