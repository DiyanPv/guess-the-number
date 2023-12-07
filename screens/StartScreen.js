import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton.'

const StartScreen = ({ pickedNumberHandler }) => {
    const [enteredNumber, setEnteredNumber] = useState(``)

    const numberInputHandler = (inputText) => {
        setEnteredNumber(inputText)
    }

    const resetInputHandler = () => {
        setEnteredNumber(``)
    }

    const confirmInputHandler = () => {
        const chosenNumer = parseInt(enteredNumber)

        if (isNaN(chosenNumer) || chosenNumer <= 0 || chosenNumer > 99) {
            Alert.alert(`Invalid Number`, `Number has to be between 1 and 99`, [{ text: `Okay`, style: `destructive`, onPress: resetInputHandler }])
        }
        if (enteredNumber.length < 1) {
            console.log(`Insufficient input`)
            return
        }
        pickedNumberHandler(chosenNumer)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={confirmInputHandler} >Confirm</PrimaryButton>
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