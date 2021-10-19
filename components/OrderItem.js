import React from 'react';
import { TouchableOpacity, View, Text, Image, StykeSheet } from 'react-native';

const OrderItem = ({ product, image, onSelect }) => {
    return(
        <TouchableOpacity
            onPress={onSelect}
        >
            <View>
                <Text>{product}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default OrderItem;