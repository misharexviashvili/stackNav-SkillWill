import { StyleSheet, View, Text, Button } from "react-native";
import PressableBtn from "../components/PressableBtn";
export default function Notifications({ navigation }) {
  const navToHomeScreen = () => navigation.navigate("HomeScreen");
  return (
    <View style={styles.notifications}>
      <Text style={styles.notificationText}>This is info screen!</Text>
      <PressableBtn onNav={navToHomeScreen}>Return to home screen</PressableBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  notifications: {
    backgroundColor: "#0F2741",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  notificationText: {
    color: "#fff",
  },
});
