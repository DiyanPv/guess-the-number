import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
export default function App() {
  return (
    <LinearGradient colors={[`#ddb52f`, `#72063c`]} style={styles.rootScreen} >
      <ImageBackground source={require(`./assets/images/bg-dice.png`)} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        {/* <StartScreen /> */}
        <SafeAreaView style={styles.rootScreen}>

          <GameScreen />
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
