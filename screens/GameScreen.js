import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>GameScreen</Text>

            <View>
                <Text>Aloo</Text>
            </View>
        </View>
    )
}

export default GameScreen


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 30
    }
})