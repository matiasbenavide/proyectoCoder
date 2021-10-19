import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ShopNavigator from '../shop';
import CartNavigator from '../cart';
import OrdersNavigator from '../orders';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
    <BottomTabs.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}
        initialRouteName="Shop"
    >
        <BottomTabs.Screen
            name="ShopTab"
            component={ShopNavigator}
            options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="md-home" size={24} color="black" />
                        <Text>Tienda</Text>
                    </View>
                )
            }}
        />
        <BottomTabs.Screen
            name="CartTab"
            component={CartNavigator}
            options={{
                tabBatIcon: () => (
                    <View>
                        <Ionicons name="md-cart" size={24} color="black" />
                        <Text>Carrito</Text>
                    </View>
                )
            }}
        />
        <BottomTabs.Screen
            name="OrderTab"
            component={OrdersNavigator}
            options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="md-list" size={24} color="black" />
                        <Text>Ordenes</Text>
                    </View>
                )
            }}
        />
    </BottomTabs.Navigator>
);

export default TabNavigator;