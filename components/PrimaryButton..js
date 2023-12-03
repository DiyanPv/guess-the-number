import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PrimaryButton = ({ children, onClick }) => {


    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onClick} android_ripple={{ color: `#690237` }} style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: `hidden`
    },
    buttonInnerContainer: {
        backgroundColor: `#4e0329`,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,

    },

    buttonText: {
        color: `white`,
        textAlign: `center`
    },
    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton