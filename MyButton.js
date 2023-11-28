import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { useState } from "react";
const MyButton = ({width,title,height,bgColor,borderRadius,titleColor}) => {
  const [text, setText] = useState("");
  const func = () => {
    if (text.length == 0) setText("Clicked");
    else setText("");
  };
  return (
    <>
      <View style={{
        width : width,
        height : height,
        backgroundColor: bgColor,
        justifyContent : "center",
        alignItems: "center",
        alignSelf : "center"
      }}>
        <Text>{title}</Text>
        
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MyButton;
