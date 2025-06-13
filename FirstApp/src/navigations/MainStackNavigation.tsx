import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/loginScreen";
import BottomTab from "../bottomTab/BottomTab";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen"
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
