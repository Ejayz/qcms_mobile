import { useNavigation } from "@react-navigation/native";
import {
  ClipboardList,
  Drill,
  LogOut,
  TestTubeDiagonal,
} from "lucide-react-native";
import { View, Text, Image, Pressable } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import db from "@/model/db";
type RootStackParamList = {
  LoginScreen: undefined;
  Dashboard: undefined;
  DashboardTab: undefined;
};
export default function DashboardView() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const logout = () => {
    navigation.popToTop();

  };

  return (
    <>
      <View className={"w-full h-screen overflow-y-auto"}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Pressable
            onPress={() => {}}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: 150,
              borderRadius: 20,
              backgroundColor: "#ff8645",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              zIndex: 1,
              top: 0,
              left: 0,
              margin: 20,
            }}
          >
            <ClipboardList
              style={{ width: 100, height: 100 }}
              color={"white"}
              size={48}
              width={100}
              height={100}
              strokeWidth={1.5}
            />
            <Text
              style={{
                fontSize: 17,
                color: "black",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Order Form
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {}}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: 150,
              borderRadius: 20,
              backgroundColor: "#ff8645",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              zIndex: 1,
              top: 0,
              left: 0,
              margin: 20,
            }}
          >
            <TestTubeDiagonal
              style={{ width: 100, height: 100 }}
              color={"white"}
              size={48}
              width={100}
              height={100}
              strokeWidth={1.5}
            />
            <Text
              style={{
                fontSize: 17,
                color: "black",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Laboratory
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: 150,
              borderRadius: 20,
              backgroundColor: "#ff8645",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              zIndex: 1,
              top: 0,
              left: 0,
              margin: 20,
            }}
          >
            <Drill
              style={{ width: 100, height: 100 }}
              color={"white"}
              size={48}
              width={100}
              height={100}
              strokeWidth={1.5}
            />
            <Text
              style={{
                fontSize: 17,
                color: "black",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Production
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.log("Logout");
              logout();
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: 150,
              borderRadius: 20,
              backgroundColor: "#ff8645",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              top: 0,
              zIndex: 1,
              left: 0,
              margin: 20,
            }}
          >
            <LogOut
              style={{
                width: 100,
                height: 100,
                zIndex: 2,
              }}
              color={"white"}
              size={48}
              width={100}
              height={100}
              strokeWidth={1.5}
            />
            <Text
              style={{
                fontSize: 17,
                color: "black",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Logout
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
