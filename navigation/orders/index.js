import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../../screens/orders/OrdersScreen';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => (
    <Stack.Navigator
        initialRoute="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? 'blue' : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : 'blue',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <Stack.Screen
            name="Orders"
            component={OrdersScreen}
            options={{ title: 'Ordenes' }}
        />
    </Stack.Navigator>
);

export default OrdersNavigator;