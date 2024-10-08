import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {

    return (
        <View className="flex-1 items-center justify-center bg-amber-50">
            <Text className="text-4xl font-pbold">First App</Text>
            <StatusBar style={"auto"} />
            <Link href="/sign-up" className="font-pextralight">Go to Auth</Link>
        </View>
    );
}
