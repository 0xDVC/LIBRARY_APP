import { Stack } from "expo-router";
import {useFonts} from "expo-font";

export default function RootLayout() {
    const [ fontsLoaded] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
