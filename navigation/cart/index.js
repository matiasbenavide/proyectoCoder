import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from '../../screens/cart/CartScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'blue': '',
            },
            headerTintColor: Platform.OS === 'android' ? '' : 'blue',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'Carrito' }}
        />
    </Stack.Navigator>
);

export default CartNavigator;