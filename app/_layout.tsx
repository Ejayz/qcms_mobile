import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useCallback } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { QueryClient, QueryClientProvider } from "react-query";
import createTables from "@/model/db";
import { Alert, BackHandler } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardTab from "@/components/DashboardTab";
import DrawerLogin from "@/components/DrawerLogin";
export const unstable_settings = {
  initialRouteName: "Login",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const hideSplashScreen = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    hideSplashScreen();
  }, [hideSplashScreen]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const queryClient = new QueryClient();

function RootLayoutNav() {
  const Stack = createStackNavigator();

  useEffect(() => {
    createTables();
  }, []);

  React.useEffect(() => {
    const onBackPress = () => {
      Alert.alert(
        "Exit App",
        "Do you want to exit?",
        [
          {
            text: "Cancel",
            onPress: () => {
              // Do nothing
            },
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      );

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );

    return () => backHandler.remove();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator initialRouteName="DrawerLogin">
        <Stack.Screen
          name="DashboardTab"
          component={DashboardTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerLogin"
          component={DrawerLogin}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </QueryClientProvider>
  );
}
