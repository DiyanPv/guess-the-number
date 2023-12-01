import { View, Text, TextInput, StyleShee, } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton.'

const StartScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCorrect={false}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 16,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        backgroundColor: `#72063c`,
        elevation: 6,
        shadowOffset: 4,
        shadowColor: `black`,
        shadowOffset: { width: 2, height: 2 }
    },

    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: `#ddb52f`,
        borderBottomWidth: 2,
        color: `#ddb52f`,
        marginVertical: 8,
        fontWeight: `bold`,
        width: 50,
        textAlign: `center`

    }
})