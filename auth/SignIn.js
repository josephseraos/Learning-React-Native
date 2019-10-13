import React, { useState } from 'react'
import { StatusBar, StyleSheet, View, Text, TextInput, Button } from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1
    },

    authenticationFields: {
        // flex: 1,
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
        autoFocus
        value={username}
        onChangeText={text => {
            setUsername(text)
        }}
    />

    const passwordField = <TextInput style={styles.fieldTextInput} secureTextEntry
        value={password}
        onChangeText={text => {
            setPassword(text)
        }}
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
                <Button title="Entrar" color="steelblue" />
            </View>
            <View style={[styles.authenticationButtons, {paddingTop: 5}]}>
                <Button title="Sair" color="darkred"
                    onPress={() => {
                        setUsername("")
                        setPassword("")
                        // usernameField.focus()
                    }}
                />
            </View>
        </View>
    )
}

export default SignIn
