import { LOAD_PRODUCTS, ERROR_PRODUCTS } from "../constants/ProductConstant"
import axios from "axios";

export const getProducts = () => async (dispatch) => {
	try {
		const { data } = await axios.get('https://fakestoreapi.com/products')

		dispatch({ type: LOAD_PRODUCTS, payload: data })

	} catch (e) {
		dispatch({ type: ERROR_PRODUCTS, payload: e.message })
	}
}