import { ADD_CART, ERROR_CART } from "../constants/CartConstant";

export const addToCart = (product) => async (dispatch) => {
	try {
		
		dispatch({ type: ADD_CART, payload: product })

	} catch (e) {
		dispatch({ type: ERROR_CART, payload: e.message })
	}
}