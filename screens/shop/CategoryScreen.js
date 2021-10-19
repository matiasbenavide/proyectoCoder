import React, { useEffect } from "react";
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';

import { useSelector, useDispatch, connect } from 'react-redux';

import ProductItem from '../../components/ProductItem';

import { filterProducts, selectProduct } from '../../store/actions/products.actions';

const CategoryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const categoryID = useSelector(state => state.categories.selectedID);
    const products = useSelector(state => state.products.filteredProducts);

    useEffect(() => {
        dispatch(filterProducts(categoryID))
    }, [categoryID])

    const handleSelected = (item) => {
        dispatch(selectProduct(item.id))
        navigation.navigate('Detail', {
            name: item.name
        })
    }

    const renderItemProduct = ({ item }) => (
        <ProductItem item={item} onSelected={handleSelected} />
    )

    return(
        <View>
            <FlatList
                style={styles.products}
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItemProduct}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    products: {
        marginTop: 10,
        fontFamily: 'press-start-2p'
    }
})

export default connect()(CategoryScreen);