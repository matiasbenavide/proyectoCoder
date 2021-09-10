import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

const CartItem = ({ item, onDelete }) => {
    return(
        <View>
            <View>
                <Text>{item.name}</Text>
            </View>
            <View>
                <View>
                    <Text>Cantidad: {item.quantity}</Text>
                </View>
                <View>
                    <Text>$ {item.price}</Text>
                </View>
                <View>
                    <Button title="Borrar" onPress={() => onDelete(item.id)} />
                </View>
            </View>
        </View>
    )
}

export default CartItem;