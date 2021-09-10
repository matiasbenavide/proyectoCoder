import { PRODUCTS } from '../../data/products';
import { SELECT_PRODUCT, FILTER_PRODUCT } from '../actions/products.actions';

const initialState = {
    list: PRODUCTS,
    filteredProducts: [],
    selectedID: null,
};

const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedID: action.productID,
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                filteredProducts: state.list.filter(item => item.category === action.categoryID)
            }
        default:
            return state
    }
};

export default ProductReducer;