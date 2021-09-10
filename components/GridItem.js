import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const GridItem = ({ item, onSelected }) => {
    return(
        <View>
            <TouchableOpacity
                onPress={() => onSelected(item)}
            >
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default GridItem;