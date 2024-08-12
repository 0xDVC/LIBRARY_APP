import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="user-profile"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile-infomation"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="user-books"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
