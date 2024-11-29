import LoginScreen from "@/app/(login)";
import DashboardScreen from "@/app/Dashboard";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function DrawerLogin() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: true,
          header: () => (
            <View
              style={{
                backgroundColor: "#f09c5a",
                height: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
