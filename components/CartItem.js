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

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
    },
    header: {
        fontFamily: 'play-fair-italic',
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
        fontFamily: 'play-fair',
    },
})

export default CartItem;