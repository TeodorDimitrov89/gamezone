import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";

const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#d7d4d4",
          headerTitleAlign: "center",
        },

        headerTintColor: "#444444",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AboutStack;
