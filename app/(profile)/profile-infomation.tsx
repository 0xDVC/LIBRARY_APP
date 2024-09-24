import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";
import { useUserContext } from "@/context/userContext";
import { Dropdown } from "react-native-element-dropdown";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Button from "@/components/Button/Button";
import { IBookTabs } from "@/types/types";
import { Animated, Easing } from "react-native";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Buffer } from "buffer";

export default function ProfileInformation() {
  const { navigate } = useNavigation();
  const { userData } = useUserContext();

  // Move all hooks to the top level
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [profile, setProfile] = useState("");
  const { back } = useRouter();
  const [lang, setLang] = useState(userData.language);

  const Languages = [
    { label: "english", value: "english" },
    { label: "french", value: "french" },
    { label: "german", value: "german" },
  ];

  const fetchUserProfile = async (username: string) => {
    setIsLoadingProfile(true);
    try {
      const url = `https://hci-backend-service-sjvlpiiqva-uc.a.run.app/api/users/ProfilePicture/${username}`;
      const response = await axios.get(url);

      if (response.status === 200) {
        const _buffer = response.data.Profile_pic_Buffer.data;
        const base64String = Buffer.from(_buffer).toString("base64");
        setProfile(`data:image/png;base64,${base64String}`);
        setIsLoadingProfile(false);
      }

      if (response.status === 404) {
        setIsLoadingProfile(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoadingProfile(false);
    }
  };

  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fetchUserProfile(userData.username);
  }, []);

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    spin.start();
  }, [rotateValue]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const rotateStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <SafeAreaView className="h-full flex bg-[#6557ec] justify-between">
      <View className="mt-8 flex-row justify-between items-center relative">
        <View className="absolute left-5 h-8 w-8 rounded-full bg-white flex-row justify-center items-center">
          <TouchableOpacity onPress={back}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl font-bold text-white">
            Profile Information
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between items-center mt-5 py-2 px-2">
        <View className="flex-1 h-38 flex-row justify-center items-center">
          <View className="flex justify-center items-center w-12 h-12 rounded-full "></View>
        </View>

        <View className="flex items-center justify-center">
          <View className="flex justify-center items-center w-28 h-28 border-4 border-green-400 rounded-full">
            {isLoadingProfile ? (
              <Animated.View style={rotateStyle}>
                <FontAwesome5 name="spinner" size={24} color="white" />
              </Animated.View>
            ) : (
              <View>
                {profile ? (
                  <Image
                    source={{ uri: profile }}
                    className="w-28 h-28 rounded-full"
                  />
                ) : (
                  <View className="flex-row justify-center items-center h-full w-full bg-blue-400 rounded-full">
                    <Text className="font-black text-white text-4xl">
                      {userData.username
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>
          <Text className="font-bold text-xl text-white mt-3">
            {userData.username}
          </Text>
        </View>

        <View className="flex-1 h-44 flex-row justify-center items-center">
          <View className="flex justify-center items-center w-12 h-12 rounded-full "></View>
        </View>
      </View>

      <View className="items-center h-full bg-white rounded-t-3xl mt-2 pt-5">
        <ScrollView className="w-full flex">
          <View className="w-full h-20 flex-row px-2 justify-between gap-x-3  self-center">
            <TouchableOpacity
              className="flex justify-center items-center flex-1 w-44 h-20 border border-gray-400 rounded-md"
              onPress={() =>
                //@ts-ignore
                navigate<IBookTabs>("user-books", { c_tab: 0 })
              }
            >
              <View>
                <MaterialIcons name="favorite" size={24} color="red" />
              </View>
              <View>
                <Text className="text-md font-bold text-gray-500">
                  Favorites
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex justify-center items-center flex-1 w-44 h-20 border border-gray-400 rounded-md"
              onPress={() =>
                //@ts-ignore
                navigate<IBookTabs>("user-books", { c_tab: 1 })
              }
            >
              <View>
                <FontAwesome5 name="book-reader" size={24} color="orange" />
              </View>
              <View>
                <Text className="text-md font-bold text-gray-500">
                  My books
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex justify-center items-center flex-1 w-44 h-20 border border-gray-400 rounded-md"
              onPress={() =>
                //@ts-ignore
                navigate<IBookTabs>("user-books", { c_tab: 2 })
              }
            >
              <View>
                <Ionicons name="calendar" size={24} color="pink" />
              </View>
              <View>
                <Text className="text-md font-bold text-gray-500">History</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="mx-4 mt-5">
            <View>
              <Text className="text-lg font-bold">Profile Management</Text>
            </View>
            <View className="mt-5">
              <TouchableOpacity
                className="flex-row justify-between items-center border-b border-gray-400"
                onPress={() =>
                  (navigate as (routeName: string) => void)("user-profile")
                }
              >
                <View className="flex-row items-center justify-center">
                  <View className="w-12 -mt-2">
                    <EvilIcons name="user" size={40} color="black" />
                  </View>
                  <View className="h-16 mr-0 flex justify-center">
                    <Text className="text-[16px] font-bold text-gray-500">
                      Profile Information
                    </Text>
                  </View>
                </View>

                <View className="ml-0">
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View className="mt-2">
              <View className="flex-row justify-between items-center border-b border-gray-400">
                <View className="flex-row items-center justify-center">
                  <View className="w-12 ">
                    <Ionicons name="language-outline" size={30} color="black" />
                  </View>
                  <View className="h-16 mr-0 flex justify-center">
                    <Text className="text-[16px] font-bold text-gray-500">
                      Language
                    </Text>
                  </View>
                </View>

                <View className="flex-1 ml-20">
                  <Dropdown
                    data={Languages}
                    value={lang}
                    labelField={"value"}
                    valueField={"value"}
                    onChange={(item) => {
                      setLang(item.value);
                    }}
                  />
                </View>
              </View>
            </View>
            <View className="mt-2">
              <TouchableOpacity className="flex-row justify-between items-center border-b border-gray-400">
                <View className="flex-row items-center justify-center">
                  <View className="w-12 ">
                    <AntDesign name="bars" size={30} color="black" />
                  </View>
                  <View className="h-16 mr-0 flex justify-center">
                    <Text className="text-[16px] font-bold text-gray-500 font-pmedium">
                      Reading Preference
                    </Text>
                  </View>
                </View>

                <View className="ml-0">
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-7  flex-row justify-center items-center ">
            <View className="w-32">
              <Button variant="primary" text="Logout" color="#2b9899" />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
