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
        <View style={styles.breadItem}>
            <TouchableCmp
                onPress={() => onSelected(item)}
            >
                <View>
                    <View style={styles.breadRow}>
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
                    <View style={styles.title}>
                        <Text>$ {item.price}</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    breadItem: {
        height: 100,
        width: '100%',
        backgroundColor: '#ccc',
        padding: 0,
        margin: 0,
    },
    breadRow: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontFamily: 'press-start-2p',
    },
})

export default BreadItem;