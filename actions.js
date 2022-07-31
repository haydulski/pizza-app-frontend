import { CART } from './types'

// INITIALIZES CLOCK ON SERVER
export const addNewProduct = (product, costs) => (dispatch) => {
    const pizzaData = {
        name: product.name || 'Custom pizza',
        id: product.id || '1x2x3x',
        is_custom: product.isCustom,
        amount: product.amount,
        price: costs,
        dough: product.dough,
        dough_size: product.doughSize,
        double_cheese: product.doubleCheese,
        ingredient_1: product.ingredients[0] || null,
        ingredient_2: product.ingredients[1] || null,
        ingredient_3: product.ingredients[2] || null,
        ingredient_4: product.ingredients[3] || null,
        ingredient_5: product.ingredients[4] || null,
        ingredient_6: product.ingredients[5] || null,
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


// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })