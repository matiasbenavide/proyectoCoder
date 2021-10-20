import React, { useLayoutEffect, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderAddItem from '../../components/HeaderAddItem';
import OrderItem from '../../components/OrderItem';

import { loadOrders } from '../../store/actions/order.actions';


const OrdersScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.cart.total);
    console.log(orders);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderAddItem} >
                    <Item
                        title="Nueva"
                        iconName="md-add"
                        onPress={() => navigation.navigate('ShopTab')}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation])

    useEffect(() => {
        dispatch(loadOrders())
    }, [])

    const renderOrder = (data) => {
        <OrderItem
            title={data.item.product}
        />
    }

    return(
        <FlatList
            data={orders}
            keyExtractor={item => item.id.toString()}
            renderItem={renderOrder}
        />
    )
};

export default OrdersScreen;