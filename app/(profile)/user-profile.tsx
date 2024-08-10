import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function userProfile() {
  return (
    <SafeAreaView className="h-full bg-[#6557ec]">
      <View className="mt-8 flex-row justify-between items-center relative">
        <View className="absolute left-5 h-8 w-8 rounded-full bg-white flex-row justify-center items-center">
          <TouchableOpacity>
            <Link href="/" className="font-pextralight">
              <AntDesign name="arrowleft" size={24} color="black" />
            </Link>
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl font-bold text-white">
            Profile Information
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center mt-10 py-2 px-2">
        <View className="flex-1 h-44 flex-row justify-center items-center">
          <View className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-white bg-white">
            <TouchableOpacity>
              <Feather name="edit" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex items-center justify-center">
          <View className="flex justify-center items-center w-36 h-36 border-4 border-green-400 rounded-full">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-36 h-36 rounded-full"
            />
          </View>
          <Text className="font-bold text-xl text-white mt-3">Hawi</Text>
        </View>
        <View className="flex-1 h-44 flex-row justify-center items-center">
          <View className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-white bg-white">
            <TouchableOpacity>
              <Feather name="camera" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="flex items-center h-full bg-white rounded-t-3xl mt-10 pt-5">
        <View className="flex-row w-full h-[4.5rem] mx-5 border-b-2 border-gray-300 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <FontAwesome6 name="circle-user" size={24} color="black" />
          </View>

          <View className="pl-5 flex-1 pb-2">
            <View>
              <Text className="text-lg font-semibold text-gray-700">
                Username
              </Text>
              <Text className="text-xl font-bold text-gray-900 mt-1">
                Home lander
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full h-[4.5rem] mx-5 border-b-2 border-gray-300 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <FontAwesome5 name="user" size={24} color="black" />
          </View>

          <View className="pl-5 flex-1 pb-2">
            <View>
              <Text className="text-lg font-semibold text-gray-700">
                Full Name
              </Text>
              <Text className="text-xl font-bold text-gray-900 mt-1">
                Hawi Ahmed
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full h-[4.5rem] mx-5 border-b-2 border-gray-300 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <MaterialCommunityIcons
              name="email-fast-outline"
              size={29}
              color="black"
            />
          </View>

          <View className="pl-5 flex-1 pb-2">
            <View>
              <Text className="text-lg font-semibold text-gray-700">Email</Text>
              <Text className="text-xl font-bold text-gray-900 mt-1">
                bajex@jason.com
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full h-[4.5rem] mx-5 border-b-2 border-gray-300 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <Feather name="phone" size={24} color="black" />
          </View>

          <View className="pl-5 flex-1 pb-2">
            <View>
              <Text className="text-lg font-semibold text-gray-700">
                Telephone Number
              </Text>
              <Text className="text-xl font-bold text-gray-900 mt-1">
                +233-20-123-4567
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full h-[4.5rem] mx-5 border-b-2 border-gray-300 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <FontAwesome5 name="book-reader" size={24} color="black" />
          </View>

          <View className="pl-5 flex-1 pb-2">
            <View>
              <Text className="text-lg font-semibold text-gray-700">
                Reading Level
              </Text>
              <Text className="text-xl font-bold text-gray-900 mt-1">
                Intermediate
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
