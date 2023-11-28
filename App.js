import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
//import {Button} from "1-button-1";
//import MyButton from './MyButton';
//import MyButton from "mybutton-111";
import MyButton from "@thunderous786/mybutton-3@1.0.0";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <MyButton width={80} height={20} title={"button"} bgColor={"lightblue"} titleSize={1} titleColor={"black"}/>
      {/* <Button width={100} height={20} bgColor={"red"}  titleSize={10} borderRadius={2}/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
