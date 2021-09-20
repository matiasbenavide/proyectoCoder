import React from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const AuthScreenWrapper = ({ children, title, message, buttonText, buttonPath }) => {
    const navigation = useNavigation();

    return(
        <KeyboardAvoidingView
            behavior="height"
            style={styles.screen}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                {children}
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(buttonPath)}>
                        <Text style={styles.promptButton}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        fontFamily: 'press-start-2p',
        marginBottom: 18,
        textAlign: 'center',
      },
      container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
      },
      prompt: {
        alignItems: 'center',
      },
      promptMessage: {
        marginTop: 5,
        fontSize: 12,
        fontFamily: 'press-start-2p',
        color: '#333',
      },
      promptButton: {
        fontSize: 16,
        fontFamily: 'press-start-2p',
        color: 'blue',
      },
});

export default AuthScreenWrapper;