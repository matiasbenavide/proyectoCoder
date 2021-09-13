import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductScreen from '../screens/ProdctScreen';
import CartScreen from '../screens/CartScreen';

import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

const ROUTES = {
    HOME: 'Home'
};

const ProductNavigatior = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? '#ccc' : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : '#ccc',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name={ROUTES.HOME}
                component={HomeScreen}
                option={{
                    title: 'Nuestras Categorías'
                }}
            />
            <Stack.Screen
                name="Categories"
                component={CategoryScreen}
                options={({route}) => ({title: route.params.name})}
            />
            <Stack.Screen
                name="Product"
                component={ProductScreen}
                options={({route}) => ({title: route.params.name})}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{title: 'Cart'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default ProductNavigatior;