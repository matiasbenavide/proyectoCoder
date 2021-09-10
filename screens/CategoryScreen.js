import React from "react";
import {
    View,
    FlatList
} from 'react-native';

import { useSelector, useDispatch, connect } from 'react-redux';

import ProductItem from '../components/ProductItem';

import { filterProducts, selectProduct } from '../store/actions/products.actions';

import ShowCart from '../components/ShowCart';

const CategoryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const categoryID = useSelector(state => state.categories.selectedID);
    const products = useSelector(state => state.products.filteredProducts);

    useEffect(() => {
        dispatch(filterProducts(categoryID))
    }, [categoryID])

    const handleSelected = (item) => {
        dispatch(selectProduct(item.id))
        navigation.navigate('Product', {
            name: item.name
        })
    }

    const renderItemProduct = ({ item }) => (
        <ProductItem item={item} onSelected={handleSelected} />
    )

    return(
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={renderItemProduct}
            />
            <ShowCart navigation={navigation} />
        </View>
    )
}

export default connect()(CategoryScreen);