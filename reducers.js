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
                orderedItems: [...state.orderedItems, payload],
                total_price: state.total_price + payload.price
            }
        case CART.REMOVE_PRODUCT:
            const price = state.total_price - state.orderedItems[payload].price
            state.orderedItems.splice(payload, 1)

            return {
                ...state,
                total_price: price
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