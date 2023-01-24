import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Details from "./screens/Details";
import Info from "./screens/Info";
import Notifications from "./screens/Notifications";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#777",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: {
              backgroundColor: "#EAD241",
            },
            headerTitleStyle: {
              color: "#000",
            },
          }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{
            headerStyle: {
              backgroundColor: "#2EDA53",
            },
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerStyle: {
              backgroundColor: "#2E82DA",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
