import React, { useState } from 'react'
import { Alert, StatusBar, ScrollView, StyleSheet, View, Text, Button } from 'react-native'

import SignIn from './auth/SignIn'

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1
    },

    header: {

    },
    main: {

    },

    
})

const Header = () => {
    return (
        <View>
            <Text>Header</Text>
        </View>
    )
}

const Main = props => {
    return (
        <View>
            <Header />
            <View>
                <Text>Main</Text>
                <Button title="Sair" onPress={() => {
                    Alert.alert(
                        'Saindo',
                        'Deseja realmente sair?',
                        [
                            {text: 'Sim', onPress: () => { props.sair() }},
                            {text: 'Cancelar', onPress: () => {
                                
                            }, style: 'cancel'}
                        ]
                    )
                }} />
            </View>
        </View>
    )
}




const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signin = (username) => {
        setIsAuthenticated(true)
    }

    const sair = () => {
        setIsAuthenticated(false)
    }

    return (
        isAuthenticated
            ? <Main sair={sair} />
            : <SignIn signin={signin}/>
    )
}

export default App
