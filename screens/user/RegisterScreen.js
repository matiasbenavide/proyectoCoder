import React, { useCallback, useReducer } from "react";
import { Alert } from 'react-native';
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import AuthScreenWrapper from '../../components/AuthScreenWrapper';
import { signup } from '../../store/actions/auth.actions';
import Input from '../../components/Input';
import { formReducer, FORM_INPUT_UPDATE } from './formReducer';

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    });

    const handleSignup = () => {
        if(formState.formIsValid) {
            dispatch(signup(formState.inputValues.email, formState.inputValues.password));
        } else {
            Alert.alert(
                'Formulario inválido',
                'Ingrese email y constraseña válidos',
                [{ text: 'Ok' }]
            );
        }
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        });
    }, [formDispatch]);

    return(
        <AuthScreenWrapper
            title="REGISTRO"
            message="¿Ya tienes cuenta?"
            buttonText="Ingresa"
            buttonPath="Login"
        >
            <Input
                id="email"
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                errorText="Por favor ingresa un email válido"
                required
                email
                onInputChange={onInputChangeHandler}
            />
            <Input
                id="password"
                label="Password"
                secureTextEntry
                autoCapitalize="none"
                errorText="La contraseña debe ser mínimo 6 caracteres"
                required
                minLength={6}
                onInputChange={onInputChangeHandler}
            />
            <Button
                title="REGISTRARME"
                onPress={handleSignup}
            />
        </AuthScreenWrapper>
    )
}

export default RegisterScreen;