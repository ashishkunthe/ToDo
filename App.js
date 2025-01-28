// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import WelComeScreen from "./screens/WelComeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1c1c1c" }, // Dark theme for the header
          headerTintColor: "#f5f5f5", // Light color for header text
          tabBarStyle: { backgroundColor: "#333333" }, // Dark theme for the drawer
          tabBarActiveTintColor: "red", // Active item text color
          tabBarInactiveTintColor: "#cccccc", // Inactive item text color
        }}
      >
        <Tab.Screen
          name="Welcome"
          component={WelComeScreen}
          options={{
            tabBarLabel: "Welcome",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }} // Custom title for the drawer
        />
        <Tab.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            tabBarLabel: "User Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
