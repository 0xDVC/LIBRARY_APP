import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font"
import { useEffect } from "react";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [fontsLoaded, error] = useFonts({
        "SF-Pro-Regular": require("../assets/fonts/SF-Pro-Regular.ttf"),
        "SF-Pro-Bold": require("../assets/fonts/SF-Pro-Bold.ttf"),
        "SF-Pro-Thin-Italic": require("../assets/fonts/SF-Pro-Thin-Italic.ttf"),
        "SF-Pro-Medium": require("../assets/fonts/SF-Pro-Regular.ttf"),
        "SF-Pro-Light-Italic": require("../assets/fonts/SF-Pro-Light-Italic.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
        "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
        "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    

    return (
        <Stack>

            <Stack.Screen name="index" options={{ headerShown: false }}>
            </Stack.Screen>

            <Stack.Screen name="(auth)" options={{ statusBarColor:'#fff',headerShown: false }}>
            </Stack.Screen>

            <Stack.Screen name="(tabs)" options={{ headerShown: false }}>
            </Stack.Screen>

            {/* <Stack.Screen name="(search)" options={{ headerShown: false }}>
            </Stack.Screen> */}

        </Stack>

    );
}