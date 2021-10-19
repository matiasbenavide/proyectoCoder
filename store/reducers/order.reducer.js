import { ADD_ORDER, LOAD_ORDERS } from "../actions/order.actions";
import Order from '../../models/Order';

const initialState = {
    orders: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                action.payload.id,
                action.payload.product,
                action.payload.image,
            )
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
        case LOAD_ORDERS:
            return {
                ...state,
                orders: action.orders.map(item => new Order(
                    item.id,
                    item.product,
                    item.image,
                ))
            }
        default:
            return state
    }
}