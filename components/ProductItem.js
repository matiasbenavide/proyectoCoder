import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';

const BreadItem = ({ item, onSelected }) => {
    let TouchableCmp = TouchableOpacity
    if(Platform.OS === 'android' && Platform.version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return(
        <View>
            <TouchableCmp
                onPress={() => onSelected(item)}
            >
                <View>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                    <View>
                        <Text>$ {item.price}</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    )
}

export default BreadItem;