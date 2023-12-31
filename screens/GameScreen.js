import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import { useState, useEffect } from 'react'
import { generateRandomNumberBetween } from '../utils/generateNumber'
import GuessedNumber from '../components/game/GuessedNumber'
import PrimaryButton from '../components/ui/PrimaryButton.'

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {

    const initialGuess = generateRandomNumberBetween(1, 100, userNumber)
    const [currentGuess, setcurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }

    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction) => {

        if ((direction === `lower` && currentGuess < userNumber) || (direction === `higher` && currentGuess > userNumber)) {
            Alert.alert('Error:', "Incorrect direction")
            return;
        }

        if (direction === `lower`) {
            maxBoundary = currentGuess


        } else if (direction === `higher`) {

            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess)
        setcurrentGuess(newRandomNumber)
    }
    return (
        <View style={styles.screen}>
            <Title titleName={`Opponent's Guess`}></Title>

            <GuessedNumber>{currentGuess}</GuessedNumber>

            <Text style={styles.questionBox}>Higher or lower?</Text>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={nextGuessHandler.bind(this, `lower`)}>-</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={nextGuessHandler.bind(this, `higher`)}>+</PrimaryButton>
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