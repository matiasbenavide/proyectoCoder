import React from "react";
import {
    View,
    StyleSheet,
    Button
} from 'react-native';

const ShowCart = ({ navigation }) => {
    const handleShowCart = () => navigation.navigate('Cart')

    return(
        <View>
            <Button title="Ver Carrito" onPress={handleShowCart} />
        </View>
    )
}

export default ShowCart;