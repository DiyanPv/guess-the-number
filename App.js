import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
export default function App() {

  const [userNumber, setUserNumber] = useState()
  return (
    <LinearGradient colors={[`#ddb52f`, `#72063c`]} style={styles.rootScreen} >
      <ImageBackground source={require(`./assets/images/bg-dice.png`)} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <StartScreen />
        <SafeAreaView style={styles.rootScreen}>

          <GameScreen userNumber={userNumber} />
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
