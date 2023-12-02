import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
export default function App() {
  return (
    <LinearGradient colors={[`#ddb52f`, `#72063c`]} style={styles.rootScreen} >
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  }
});
