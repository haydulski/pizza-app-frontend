import { combineReducers } from 'redux'
import { CART } from './types'

// cart reducer

const initialState = {
    orderedItems: [],
    total_price: 0
}
const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART.ADD_ITEM:
            return {
                ...state,
                orderedItems: [...state.orderedItems, payload[0]],
                total_price: state.total_price + payload[1]
            }
        default:
            return state
    }
}



// COMBINED REDUCERS
const reducers = {
    cart: cartReducer,
}

export default combineReducers(reducers)