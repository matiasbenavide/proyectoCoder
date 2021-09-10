import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { useSelector, connect, useDispatch } from "react-redux";

import { addItem } from '../store/actions/cart.actions';

import ShowCart from "../components/ShowCart";

const ProductScreen = ({ navigation }) => {
    const productID = useSelector(state => state.products.selectedID)
    const products = useSelector(state => state.products.list)
    const product = products.find(item => item.id === productID)

    const dispatch = useDispatch();

    const handleAddItemCart = () => dispatch(addItem(product))

    return(
        <View>
            <View>
                <Text>{product.name}</Text>
            </View>
            <View>
                <Text>{product.description}</Text>
            </View>
            <View>
                <Text>{product.price}</Text>
            </View>
            <View>
                <Button title="AGREGAR AL CARRITO" onPress={handleAddItemCart} />
            </View>
            <ShowCart navigation={navigation} />
        </View>
    )
}

export default connect()(ProductScreen)