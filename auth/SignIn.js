import React, { useState } from 'react'
import { StatusBar, StyleSheet, View, Text, TextInput, Button, Alert, BackHandler } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    authenticationFields: {
        // flex: 1,
        paddingTop: StatusBar.currentHeight,
        flexDirection: "row",
    },

    authenticationButtons: {
        // flex: 1,
        padding: 20,
        paddingTop: 0,
    },

    authenticationColumn: {
        padding: 20, flex: 1,
    },

    labelTextInput: {

    },

    fieldTextInput: {
        borderWidth: 1,
        borderRadius: 1,
        height: 40,
        padding: 10,
    },
    
    signInButton: {
        flex: 1,
        height: 40
    },
    exitButton: {
        flex: 1,
        height: 40,
    },
})

const SignIn = props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const usernameField = <TextInput style={styles.fieldTextInput} autoCapitalize="none"
        selectTextOnFocus
        autoFocus
        value={username}
        onChangeText={text => {
            setUsername(text)
        }}
        ref={input => { this.usernameField = input}}
    />

    const passwordField = <TextInput style={styles.fieldTextInput} secureTextEntry
        selectTextOnFocus
        value={password}
        onChangeText={text => {
            setPassword(text)
        }}
        ref={input => { this.passwordField = input }}
    />

    return (
        <View style={styles.container}>
            <View style={styles.authenticationFields}>
                <View style={[styles.authenticationColumn, {paddingRight: 5}]}>
                    <Text style={styles.labelTextInput}>Usuário</Text>
                    {usernameField}
                </View>
                <View style={[styles.authenticationColumn, {paddingLeft: 5}]}>
                    <Text style={styles.labelTextInput}>Senha</Text>
                    {passwordField}
                </View>
            </View>
            <View style={styles.authenticationButtons}>
                <Button title="Entrar" color="steelblue" onPress={() => {
                    if (username === 'admin' && password === '123456') {
                        setPassword("")
                        props.signin(username)
                    } else {
                        Alert.alert(
                            'Falha na autenticação',
                            'Nome de usuário e/ou senha incorreto(s)', [
                                {text: 'Ok', onPress: () => {
                                    setPassword("")
                                    this.usernameField.focus()
                                }}
                            ]
                        )
                    }
                }} />
            </View>
            <View style={[styles.authenticationButtons, {paddingTop: 5}]}>
                <Button title="Sair" color="darkred"
                    onPress={() => {

                        Alert.alert(
                            'Saindo',
                            'Deseja realmente sair?',
                            [
                                {text: 'Sim', onPress: () => { BackHandler.exitApp() }},
                                {text: 'Cancelar', onPress: () => {
                                    setUsername("")
                                    setPassword("")
                                    this.usernameField.focus()
                                }, style: 'cancel'}
                            ]
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default SignIn
