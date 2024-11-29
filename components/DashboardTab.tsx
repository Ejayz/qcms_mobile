import LoginScreen from "@/app/(login)";
import DashboardScreen from "@/app/Dashboard";
import OrderFormScreen from "@/app/OrderForm";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LayoutDashboard, Settings } from "lucide-react-native";
import { View, Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function DashboardTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: true,
          tabBarIcon: () => {
            return (
              <LayoutDashboard size={36} color="#ff8645" strokeWidth={1.5} />
            );
          },

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
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: () => {
            return <Settings size={36} color="#ff8645" strokeWidth={1.5} />;
          },
          headerShown: false,
        }}
        component={OrderFormScreen}
      />
    </Tab.Navigator>
  );
}
