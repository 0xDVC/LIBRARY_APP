import { Stack } from "expo-router";
import headerShownContext from "@react-navigation/elements/src/Header/HeaderShownContext";

export default function RootLayout() {
  return (
      <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }}>
          </Stack.Screen>

      </Stack>

  );
}