import React from "react";
import {
    View,
    StyleSheet,
    Button
} from 'react-native';

const ShowCart = ({ navigation }) => {
    const handleShowCart = () => navigation.navigate('Cart')

    return(
        <View style={styles.container}>
            <Button
                style={styles.button}
                title="Ver Carrito"
                onPress={handleShowCart}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
    }
})

export default ShowCart;