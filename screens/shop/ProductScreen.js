import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { useSelector, connect, useDispatch } from "react-redux";

import { addItem } from '../../store/actions/cart.actions';

const ProductScreen = ({ navigation }) => {
    const productID = useSelector(state => state.products.selectedID)
    const products = useSelector(state => state.products.list)
    const product = products.find(item => item.id === productID)

    const dispatch = useDispatch();

    const handleAddItemCart = () => dispatch(addItem(product))

    return(
        <View style={styles.screen}>
            <View>
                <Text style={styles.title}>{product.name}</Text>
            </View>
            <View>
                <Text style={styles.description}>{product.description}</Text>
            </View>
            <View>
                <Text style={styles.price}>{product.price}</Text>
            </View>
            <View>
                <Button title="AGREGAR AL CARRITO" onPress={handleAddItemCart} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontFamily: 'press-start-2p'
    },
    price: {
        fontSize: 40,
        fontFamily: 'press-start-2p'
    },
    description: {
        fontSize: 20,
    }
})

export default connect()(ProductScreen)