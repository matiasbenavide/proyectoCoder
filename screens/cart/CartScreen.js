import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import { useSelector, connect, useDispatch } from 'react-redux';

import { removeItem, confirmItem } from '../../store/actions/cart.actions';

import CartItem from '../../components/CartItem';

const CartScreen = () => {
    const dispatch = useDispatch();
    const ITEMS = useSelector(state => state.cart.items);
    const TOTAL = useSelector(state => state.cart.total);
    const STATUS = useSelector(state => state.cart.status);

    const handleDeleteItem = (id) => dispatch(removeItem(id));
    const handleConfirmItem = (items) => dispatch(confirmItem(items));

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
                    keyExtractor={(item) => item.id}
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
                        <TouchableOpacity style={styles.confirm}>
                            <Text>Confirmar</Text>
                            <View style={styles.total}>
                                <Text style={styles.text}>TOTAL</Text>
                                <Text style={styles.text}>$ {TOTAL}</Text>
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
    text: {
        fontSize: 24,
        fontFamily: 'press-start-2p',
        padding: 8,
    },
    total: {
        flexDirection: 'row',
    },
    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default connect()(CartScreen)