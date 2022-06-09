import { useFonts } from "expo-font";
import Navigator from "./routes/homeStack";

import Home from "./screens/Home";

const App = () => {
  const [loaded] = useFonts({
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return <Navigator />;
};

export default App;
