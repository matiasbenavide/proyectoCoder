import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, connect, useDispatch } from 'react-redux';

import { removeItem, confirmItem } from '../../store/actions/cart.actions';
import { addOrder } from '../../store/actions/order.actions';

import CartItem from '../../components/CartItem';

const CartScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const ITEMS = useSelector(state => state.cart.items);
    const TOTAL = useSelector(state => state.cart.total);
    const STATUS = useSelector(state => state.cart.status);

    

    const handleDeleteItem = (id) => dispatch(removeItem(id));
    const handleSaveOrder = (items) => {
        dispatch(confirmItem(items), addOrder(ITEMS))
        navigation.navigate('OrderTab')
    }

    const renderCardItems = (itemData) => (
        <CartItem
            item={itemData.item}
            onDelete={handleDeleteItem}
        />
    )

    return(
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={ITEMS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCardItems}
                />
            </View>
            <View style={styles.footer}>
                {STATUS === 'loading'
                    ? (
                        <ActivityIndicator
                            size="large"
                        />
                    )
                    : (
                        <TouchableOpacity style={styles.confirm} onPress={handleSaveOrder}>
                            <View style={styles.view}>
                                <Text style={styles.text}>Confirmar</Text>
                                <View style={styles.total}>
                                    <Text style={styles.text}>TOTAL</Text>
                                    <Text style={styles.text}>$ {TOTAL}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
    },
    footer: {
        flex: .2,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    list: {
        flex: .8,
    },
    view: {
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontFamily: 'press-start-2p',
        padding: 8,
    },
    total: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    confirm: {
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default connect()(CartScreen)