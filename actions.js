import { CART } from './types'

// INITIALIZES CLOCK ON SERVER
export const addCustomProduct = (product, costs) => (dispatch) => {
    const pizzaData = {
        name: product.name || 'Custom pizza',
        pizza_id: product.id || 'VEN5qG',
        is_custom: product.isCustom,
        amount: product.amount,
        price: costs,
        dough: product.dough,
        dough_size: product.doughSize,
        double_cheese: product.doubleCheese,
        ingredient_1: product.ingredients[0]?.name || null,
        ingredient_2: product.ingredients[1]?.name || null,
        ingredient_3: product.ingredients[2]?.name || null,
        ingredient_4: product.ingredients[3]?.name || null,
        ingredient_5: product.ingredients[4]?.name || null,
        ingredient_6: product.ingredients[5]?.name || null,
    }
    dispatch({
        type: CART.ADD_ITEM,
        payload: pizzaData,
    })
}

export const removeProduct = (index) => (dispatch) => {
    dispatch({
        type: CART.REMOVE_PRODUCT,
        payload: index,
    })
}
export const resetCart = (index) => (dispatch) => {
    dispatch({ type: CART.RESET_CART })
}


// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })