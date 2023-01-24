import { StyleSheet, View, Text, Button } from "react-native";
import PressableBtn from "../components/PressableBtn";
export default function Info({ navigation }) {
  const navToNotifications = () => navigation.navigate("Notifications");
  return (
    <View style={styles.info}>
      <Text>This is info screen!</Text>
      <PressableBtn onNav={navToNotifications}>
        Go to notifications
      </PressableBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
