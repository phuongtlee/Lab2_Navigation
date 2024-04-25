import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Contacts from "./screen/Contacts";
import { useEffect } from "react";
import { fetchContacts } from "./utility/api";
import Profiles from "./screen/Profiles";

import {
  Button,
  Divider,
  Drawer,
  PaperProvider,
  Provider,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Favorites from "./screen/Favorites";
import User from "./screen/User";
import DrawerCustom from "./DrawerCustom";
import { Header } from "@react-navigation/stack";
import colors from "./utility/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import DrawerNav from "./DrawerNav";
import BottomTabs from "./BottomTabs";

export default function App() {
  // useEffect(() => {
  //   fetchContacts().then((data) => console.log(data));
  // }, []);
  const Tab = createMaterialTopTabNavigator()
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Drawer" component={DrawerNav}/>
          <Tab.Screen name="Bottom" component={BottomTabs}/>
        </Tab.Navigator>
        {/* <DrawerNav/> */}
      </NavigationContainer>

      {/* <Contacts /> */}
      {/* <Profile /> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // // alignItems: "center",
    // justifyContent: "center",
  },
});
