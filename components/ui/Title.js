import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({ titleName }) => {
    return (
        <View>
            <Text style={style.title}>{titleName}</Text>

        </View>
    )
}

export default Title

const style = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: `bold`,
        color: `white`,
        borderColor: `black`,
        // borderWidth: 2,
        textAlign: `center`,
        padding: 12

    }
})