import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../../screens/shop/HomeScreen';
import CategoryScreen from '../../screens/shop/CategoryScreen';
import ProductScreen from '../../screens/shop/ProductScreen';

const Stack = createNativeStackNavigator();

const ROUTES = {
    HOME: 'Home',
}

const ShopNavigator = () => (
    <Stack.Navigator
        initialRouteName="Home"
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
            name={ROUTES.HOME}
            component={HomeScreen}
            options={{
                title: 'Categorías'
            }}
        />
        <Stack.Screen
            name="Products"
            component={CategoryScreen}
            options={({ route }) => ({
                title: route.params.name
            })}
        />
        <Stack.Screen
            name="Detail"
            component={ProductScreen}
            options={({ route }) => ({
                title: route.params.name
            })}
        />
    </Stack.Navigator>
);

export default ShopNavigator;