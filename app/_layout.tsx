import {SplashScreen} from "expo-router";
import {useFonts} from "expo-font";
import {Slot} from "expo-router";
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [ fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono.ttf")
    });
    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded) {
        return null;
    }

    return (
    <Slot />
  );
}
