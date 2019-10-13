import React, { useState } from 'react'
import { StatusBar, ScrollView, StyleSheet, View, Text } from 'react-native'

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

const Main = () => {
    return (
        <View>
            <Header />
            <View>
                <Text>Main</Text>
            </View>
        </View>
    )
}




const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        isAuthenticated
            ? <Main />
            : <SignIn />
    )
}

export default App
