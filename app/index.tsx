import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import SearchInput from "@/components/SearchInput";

export default function Index() {

    return (
        <View className=" flex-1 items-center justify-center px-2 bg-amber-50">
            <Text className="text-4xl font-pbold">First App</Text>
            <StatusBar style={"auto"} />
            <Link href="/home" className="font-pextralight">Go to Home</Link>
        </View>
        
    );
}
