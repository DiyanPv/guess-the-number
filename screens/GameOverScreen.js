import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const GameOverScreen = () => {
    return (
        <View style={styles.textContainer} >
            <SafeAreaView>
                <Text style={styles.text}>
                    Congratulations, you won!
                </Text>
            </SafeAreaView>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    textContainer: {
        textAlign: `center`,
        justifyContent: `center`,
        flex: 1,
        alignItems: `center`,
  
    },
    text: {
        fontWeight: `bold`,
        fontSize: 24
    }

})