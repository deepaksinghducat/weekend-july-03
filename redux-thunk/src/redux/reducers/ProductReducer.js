import { ERROR_PRODUCTS, LOAD_PRODUCTS } from "../constants/ProductConstant";

const initialProductState = {
	products: [],
	err: ''
}

export const ProductReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			return {
				...state,
				products: action.payload
			}

		case ERROR_PRODUCTS:
			return {
				...state,
				err: action.payload
			}

		default:
			return state;
	}
}