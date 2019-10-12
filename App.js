import React, { useState } from 'react'
import { StatusBar, StyleSheet, View, Text, Button, TextInput } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'stretch',
        // justifyContent: 'space-between',
    },
    inputs: {
        alignItems: 'center',
        padding: 20,
        // backgroundColor: 'skyblue',
    },
    result: {
        padding: 20,
        // paddingTop: 0,
        backgroundColor: 'steelblue',
        alignItems: 'center'
    },
    label: {
        fontSize: 30,
    },
    smallLabel: {
        fontSize: 20,
    },
    field: {
        height: 40,
        fontSize: 30,
    }
})

const App = () => {
    StatusBar.setHidden(true)
    const [weigth, setWeigth] = useState("")
    const [height, setHeight] = useState("")
    
    const defaultTextResult = "Preencha os campos acima corretamente"
    const [result, setResult] = useState(defaultTextResult)

    const calculateResult = () => {
        const w = weigth.trim().replace(',', '.')
        const h = height.trim().replace(',', '.')

        if (w !== '' && h !== '' && !isNaN(w) && !isNaN(h)) {
            const ans = Number(w) / (Number(h) ** 2.0)
            let text = "IMC: " + ans.toFixed(2).replace(".", ",")

            if (ans < 17)
                text += " - Muito abaixo do peso"
            else if (ans < 18.5)
                text += " - Abaixo do peso"
            else if (ans < 25)
                text += " - Peso normal"
            else if (ans < 30)
                text += " - Acima do peso"
            else if (ans < 35)
                text += " - Obesidade I"
            else if (ans < 40)
                text += " - Obesidade II (severa)"
            else
                text += " - Obesidade III (mórbida)"

            setResult(text)
        } else {
            setResult(defaultTextResult)
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={{fontSize: 40, color: 'white'}}>Cálculo do IMC</Text>
            </View>
            <View style={styles.inputs}>
                <Text style={styles.label}>Peso em kg <Text style={styles.smallLabel}>(ex.: 69,2)</Text></Text>
                <TextInput
                    style={styles.field}
                    placeholder='69,2'
                    keyboardType='numeric'
                    value={weigth}
                    onChangeText={text => {
                        setWeigth(text)
                    }}
                />
                <Text style={[styles.label, {paddingTop: 20}]}>Altura em m <Text style={styles.smallLabel}>(ex.: 1,70)</Text></Text>
                <TextInput
                    style={styles.field}
                    placeholder='1,70'
                    keyboardType='numeric'
                    value={height}
                    onChangeText={text => {
                        setHeight(text)
                    }}
                />
                
            </View>
            <View style={styles.result}>
                <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>
                    {result}
                </Text>
                <View style={{flexDirection: "row"}}>
                    <Button title="Calcular" style={{ margin: 20, padding: 20 }} onPress={() => {
                        calculateResult()
                    }} />
                    <Button title="Limpar" style={{ margin: 20, padding: 20 }} color="gray" onPress={() => {
                        setWeigth("")
                        setHeight("")
                        setResult(defaultTextResult)
                    }} />
                </View>
            </View>
        </View>
    )
}

export default App

