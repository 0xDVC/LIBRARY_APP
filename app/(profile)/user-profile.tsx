import { useContext } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { UserProvider, useUserContext } from "@/context/userContext";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function userProfile() {
  const { back } = useRouter();
  const { userData, setUserData } = useUserContext();
  return (
    <SafeAreaView className="h-full bg-[#6557ec] flex">
      <View className="mt-8 flex-row justify-between items-center relative">
        <View className="absolute left-5 h-7 w-7 rounded-full bg-white flex-row justify-center items-center">
          <TouchableOpacity onPress={back}>
            <AntDesign name="arrowleft" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold text-white">
            Profile Information
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center mt-10 py-2 px-2">
        <View className="flex-1 h-44 flex-row justify-center items-center">
          <View className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white bg-white">
            <TouchableOpacity>
              <Feather name="edit" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex items-center justify-center">
          <View className="flex justify-center items-center w-28 h-28 border-4 border-green-400 rounded-full">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-28 h-28 rounded-full"
            />
          </View>
          <Text className="font-bold text-xl text-white mt-3">Hawi</Text>
        </View>
        <View className="flex-1 h-44 flex-row justify-center items-center">
          <View className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white bg-white">
            <TouchableOpacity>
              <Feather name="camera" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="items-center h-full bg-white rounded-t-3xl mt-3 pt-3">
        <View className="flex-row w-full h-[4rem] mx-5 border-b-2 border-gray-200 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <FontAwesome6 name="circle-user" size={24} color="gray" />
          </View>

          <View className="flex-1 pb-2">
            <View>
              <Text className="text-[15px] font-semibold text-gray-700">
                Username
              </Text>
              <Text className="text-[15px] font-bold text-gray-900 mt-1">
                Home lander
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full h-[4rem] mx-5 border-b-2 border-gray-200 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <FontAwesome5 name="user" size={24} color="gray" />
          </View>

          <View className="flex-1 pb-2">
            <View>
              <Text className="text-[15px] font-semibold text-gray-700">
                Full Name
              </Text>
              <Text className="text-[15px] font-bold text-gray-900 mt-1">
                Hawi Ahmed
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full h-[4rem] mx-5 border-b-2 border-gray-200 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <MaterialCommunityIcons
              name="email-fast-outline"
              size={29}
              color="gray"
            />
          </View>

          <View className="flex-1 pb-2">
            <View>
              <Text className="text-[15px] font-semibold text-gray-700">
                Email
              </Text>
              <Text className="text-[15px] font-bold text-gray-900 mt-1">
                bajex@jason.com
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full h-[4rem] mx-5 border-b-2 border-gray-200 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <Feather name="phone" size={24} color="gray" />
          </View>

          <View className="flex-1 pb-2">
            <View>
              <Text className="text-[15px] font-semibold text-gray-700">
                Telephone Number
              </Text>
              <Text className="text-[15px] font-bold text-gray-900 mt-1">
                +233-20-123-4567
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row w-full h-[4.5rem] mx-5 border-b-2 border-gray-200 my-3">
          <View className="ml-2 w-14 flex justify-center items-center">
            <EvilIcons name="chart" size={32} color="gray" />
          </View>

          <View className="flex-1 pb-2">
            <View>
              <Text className="text-[15px] font-semibold text-gray-700">
                Reading Level
              </Text>
              <Text className="text-[15px] font-bold text-gray-900 mt-1">
                Intermediate
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
