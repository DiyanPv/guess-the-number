import { View, Text, TextInput, StyleSheet, } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton.'

const StartScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton >Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton >Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )

}

export default StartScreen

const styles = StyleSheet.create({
    buttonsContainer: {

        flexDirection: `row`
    },
    inputContainer: {
        justifyContent: `center`,
        alignItems: `center`,
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
    buttonContainer: {
        flex: 1
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