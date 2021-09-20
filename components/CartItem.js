import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

const CartItem = ({ item, onDelete }) => {
    return(
        <View style={styles.item}>
            <View style={styles.header}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text style={styles.quantityPrice}>Cantidad: {item.quantity}</Text>
                </View>
                <View>
                    <Text style={styles.quantityPrice}>$ {item.price}</Text>
                </View>
                <View>
                    <Button title="Borrar" onPress={() => onDelete(item.id)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
    },
    header: {
        fontFamily: 'press-start-2p',
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontFamily: 'press-start-2p',
    },
    quantityPrice: {
        fontSize: 14,
        fontFamily: 'press-start-2p',
    }
})

export default CartItem;