import { Formik } from "formik";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import * as SQLite from "expo-sqlite";
type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
  DashboardTab: undefined;
};

export default function LoginScreen() {
  const db = SQLite.openDatabaseSync("ms");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const mutateLogin = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        email: data.email,
        password: data.password,
      });

      let response = await fetch(
        "https://dev.sledgehammerdevelopmentteam.uk/api/authentication/",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );
      console.log(response);
      const request = await response.json();
      console.log(request);
      if (request.error) {
        return {
          status: response.status,
          error: request.error,
        };
      }
      const selected = db.getFirstSync(
        `SELECT * FROM tbl_users where uuid = ?`,
        [request.session.user.id]
      );

      const update = db.runSync(
        "UPDATE tbl_users SET is_exist = false where is_exist=true",
        []
      );

      if (!selected) {
        const insertAccount = db.runSync(
          `INSERT INTO tbl_users (uuid,role, is_exist) VALUES (?,?,?)`,
          [
            request.session.user.id,
            request.session.user.user_metadata.role,
            true,
          ]
        );
      }

      const updateToOnline = db.runSync(
        "UPDATE tbl_users SET is_exist = true where uuid = ?",
        [request.session.user.id]
      );

      return {
        data: {
          role: request.session.user.user_metadata.role,
        },
      };
    },
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 401) {
        alert("Invalid email or password");
        return;
      } else if (data.status === 404) {
        alert("User not found");
        return;
      } else if (data.data?.role === "Admin") {
        navigation.navigate("DashboardTab");
      } else {
        alert(
          "You dont have permission to access this page. If you are super admin please use the web app. Thank you"
        );
      }
    },
  });

  return (
    <ImageBackground
      source={require("../../assets/images/2track.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 268, height: 107 }}
        />
        <Text style={{ fontSize: 30, color: "black" }}>Login</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
            mutateLogin.mutate(values, {
              onSuccess: () => {
                actions.resetForm();
              },
            });
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
                style={{
                  marginBottom: 10,
                  width: 200,
                  height: 40,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 25,
                  textAlign: "center",
                }}
              />
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
                placeholder="Password"
                style={{
                  marginBottom: 10,
                  width: 200,
                  height: 40,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 25,
                  textAlign: "center",
                }}
              />
              <Pressable
                onPress={() => {
                  handleSubmit();
                }}
                disabled={mutateLogin.isLoading}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 150,
                  height: 35,
                  backgroundColor: mutateLogin.isLoading ? "gray" : "#f09c5a",
                  borderRadius: 25,
                  justifyContent: "center", // Centers text vertically
                  alignItems: "center", // Centers text horizontally
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center", // Ensure text is centered inside the Pressable
                  }}
                >
                  {mutateLogin.isLoading ? "Logging in..." : "Login"}
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
}
