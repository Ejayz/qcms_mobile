import {
    ClipboardList,
    Drill,
    LogOut,
    TestTubeDiagonal,
  } from "lucide-react-native";
  import { View, Text, Image, Pressable } from "react-native";
  export default function OrderListScreen() {
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
              <LogOut
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
                Logout
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }
  