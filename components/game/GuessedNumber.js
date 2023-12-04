import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GuessedNumber = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default GuessedNumber

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: `brown`,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        justifyContent: `center`,
        alignItems: `center`
    },

    numberText: {
        color: `black`,
        fontSize: 36,
        fontWeight: 'bold'
    }
})