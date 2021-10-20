import * as FileSystem from 'expo-file-system';
import { insertOrder, fetchOrders } from '../../data/index';

export const ADD_ORDER = 'ADD_ORDER';
export const LOAD_ORDERS = 'LOAD_ORDERS';

export const addOrder = (product) => {
    return async dispatch => {
        try {
            const result = await insertOrder(
                product
            )

            dispatch({
                type: ADD_ORDER,
                payload: {
                    id: result.insertId,
                    product,
                }
            })

        } catch(error) {
            console.log(error.message);
            throw error;
        }
    }
}

export const loadOrders = () => {
    return async dispatch => {
        try {
            const result = await fetchOrders()
            dispatch({ type: LOAD_ORDERS, orders: result.rows._array })
        } catch(error) {
            console.log(error.message);
            throw error;
        }
    }
}