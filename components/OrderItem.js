import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const OrderItem = ({ product, onSelect }) => {
    console.log(product);
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