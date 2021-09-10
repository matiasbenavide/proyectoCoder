export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTER_PRODUCT = 'FILTER_PRODUCT';

export const selectProduct = (productID) => ({
    type: SELECT_PRODUCT,
    productID,
});

export const filterBreads = (categoryID) => ({
    type: FILTER_PRODUCT,
    categoryID,
});