import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/PrimaryButton.'

const StartScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
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
        backgroundColor: `#72063c`
    }
})