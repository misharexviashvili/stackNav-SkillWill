import { StyleSheet, View, Text, Button } from "react-native";
import PressableBtn from "../components/PressableBtn";
export default function Details({ navigation }) {
  const navToInfo = () => navigation.navigate("Info");
  return (
    <View style={styles.details}>
      <Text>This is details screen!</Text>
      <PressableBtn onNav={navToInfo}>Go to info screen</PressableBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    backgroundColor: "#bea925",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
