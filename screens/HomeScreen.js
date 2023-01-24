import { StyleSheet, View, Text, Button } from "react-native";
import PressableBtn from "../components/PressableBtn";
export default function HomeScreen({ navigation }) {
  const navToDetails = () => navigation.navigate("Details");
  return (
    <View style={styles.home}>
      <Text>This is home screen!</Text>
      <PressableBtn onNav={navToDetails}>Go to details screen</PressableBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
