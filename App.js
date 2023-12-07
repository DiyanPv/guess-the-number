import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {


  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  function gameOverHandler() {
    setGameIsOver(true)
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }

  let screen = <StartScreen pickedNumberHandler={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />

  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }
  console.log(screen)
  return (
    <LinearGradient colors={[`#ddb52f`, `#72063c`]} style={styles.rootScreen} >
      <ImageBackground source={require(`./assets/images/bg-dice.png`)} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        {screen}
        <SafeAreaView style={styles.rootScreen}>

        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.30

  }
});
