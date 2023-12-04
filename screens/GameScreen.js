import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import { useState } from 'react'
import { generateRandomNumberBetween } from '../utils/generateNumber'
import GuessedNumber from '../components/game/GuessedNumber'
import PrimaryButton from '../components/ui/PrimaryButton.'



const GameScreen = ({ userNumber }) => {


const nextGuessHandler = (direction) => {
switch(direction){
    case `lower`: break;
    case `higher` : break;
}
}

    const initialGuess = generateRandomNumberBetween(1, 100, userNumber)
    const [currentGuess, setcurrentGuess] = useState(initialGuess);
    return (
        <View style={styles.screen}>
            <Title titleName={`Opponent's Guess`}></Title>

            <GuessedNumber>{currentGuess}</GuessedNumber>

            <Text style={styles.questionBox}>Higher or lower?</Text>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton >+</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton >-</PrimaryButton>
                </View>
            </View>

        </View>
    )
}

export default GameScreen


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 30
    },
    title: {
        fontSize: 26,
        fontWeight: `bold`,
        color: `brown`,
        textAlign: `center`,
        borderWidth: 2,
        borderColor: `brown`,
        padding: 12

    },
    buttonsContainer: {
        flexDirection: `row`,
        justifyContent: `center`
    },
    buttonContainer: {
        flex: 1
    },
    questionBox: {
        textAlign: `center`,
        fontWeight: `bold`,
        fontSize: 20
    }
})