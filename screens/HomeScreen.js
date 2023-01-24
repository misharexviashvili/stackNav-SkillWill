import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, Button } from "react-native";
import PressableBtn from "../components/PressableBtn";
const Tab = createBottomTabNavigator();
function Home({ navigation }) {
  const navToDetails = () => navigation.navigate("Details");
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>This is first home screen!</Text>
      <PressableBtn onNav={navToDetails}>Go to details screen</PressableBtn>
    </View>
  );
}
function Screen({ navigation }) {
  const navToDetails = () => navigation.navigate("Details");
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>This is second home screen!</Text>
      <PressableBtn onNav={navToDetails}>Go to details screen</PressableBtn>
    </View>
  );
}
export default function HomeScreen() {
  return (
    <Tab.Navigator

    // TODO: სტაილინგი გასავლელია, დავიკარგე

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Screen") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Screen" component={Screen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  homeText: {
    color: "#fff",
  },
});
