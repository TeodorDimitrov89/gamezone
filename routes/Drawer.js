import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/About";
import Home from "../screens/Home";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#433934" },
        headerTintColor: "#ffffff",
        headerTitleAlign: "center",
        // sceneContainerStyle: { backgroundColor: "#69605b" },
        drawerContentStyle: { backgroundColor: "#3f2f25" },
        drawerInactiveTintColor: "white",
        // drawerActiveBackgroundColor: "#ac9f98",
        // drawerActiveTintColor: "#8f522c",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Game Zone",
          // drawerIcon: ({ color, size }) => (
          //   <Ionicons name="list" color={color} size={size} />
          // ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          // drawerIcon: ({ color, size }) => (
          //   <Ionicons name="star" color={color} size={size} />
          // ),
          title: "About Game Zone",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
