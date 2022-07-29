import { CART } from './types'

// INITIALIZES CLOCK ON SERVER
export const addNewProduct = (product, costs) => (dispatch) =>
    dispatch({
        type: CART.ADD_ITEM,
        payload: [product, costs],
    })


// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })