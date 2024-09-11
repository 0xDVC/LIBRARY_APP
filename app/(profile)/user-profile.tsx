import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";
import { useUserContext } from "@/context/userContext";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Animated } from "react-native";

const reading_level = [
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Advanced", value: "Advanced" },
];

export default function userProfile() {
  const { back } = useRouter();
  const { userData, setUserData } = useUserContext();
  const [isEdit, setIsEdit] = useState(false);

  const username = userData.username;
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [isLoadingCancel, setIsLoadingCancel] = useState(false);

  const [new_username, setUsername] = useState(userData.username);
  const [fullName, setFullName] = useState(userData.full_name);
  const [readingLevel, setReadingLevel] = useState(userData.reading_level);
  const [email, setEmail] = useState(userData.email);
  const [telephone, setTelephone] = useState(userData.telephone);
  const [language, setLanguage] = useState(userData.language);

  const rotateValue = useRef(new Animated.Value(0)).current;

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const rotateStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  const saveUserData = async () => {
    setIsLoadingSave(true);
    try {
      const response = await axios.post(
        "https://hci-backend-service-sjvlpiiqva-uc.a.run.app/api/users/user/update_user_profile_info/",
        {
          username: username,
          new_username: new_username,
          full_name: fullName,
          email: email,
          telephone: telephone,
          reading_level: readingLevel,
        }
      );

      if (response.status === 200) {
        setUserData({
          ...userData,
          username: new_username,
          full_name: fullName,
          reading_level: readingLevel,
          email: email,
          telephone: telephone,
          language: language,
        });
        setIsEdit(false);
        setIsLoadingSave(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoadingSave(false);
    }
  };

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

  return (
    <SafeAreaView className="h-full bg-[#6557ec] flex">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
              <TouchableOpacity onPress={() => setIsEdit(true)}>
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
            <Text className="font-bold text-xl text-white mt-3">
              {userData.username}
            </Text>
          </View>
          <View className="flex-1 h-44 flex-row justify-center items-center">
            <View className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white bg-white">
              <TouchableOpacity>
                <Feather name="camera" size={22} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {isEdit ? (
          <ScrollView>
            <View className="items-center h-full bg-white rounded-t-3xl mt-3 pt-3 mb-10">
              <View className="flex-row w-full h-[4rem] mx-5 border-b-2 border-gray-200 my-3">
                <View className="ml-2 w-14 flex justify-center items-center">
                  <FontAwesome6 name="circle-user" size={24} color="gray" />
                </View>

                <View className="flex-1 pb-2">
                  <View>
                    <Text className="text-[15px] font-semibold text-gray-700">
                      Username
                    </Text>

                    <TextInput
                      className="border-b-2 border-red-500"
                      placeholder="Enter Username"
                      value={new_username}
                      onChange={(e) => setUsername(e.nativeEvent.text)}
                    />
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
                    <TextInput
                      className="border-b-2 border-red-500"
                      placeholder="Enter Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.nativeEvent.text)}
                    />
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
                    <TextInput
                      className="border-b-2 border-red-500"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.nativeEvent.text)}
                    />
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

                    <TextInput
                      className="border-b-2 border-red-500"
                      placeholder="Enter telephone number"
                      value={telephone}
                      onChange={(e) => setTelephone(e.nativeEvent.text)}
                    />
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
                      <Dropdown
                        data={reading_level}
                        placeholder="Select your reading level"
                        value={readingLevel}
                        labelField={"value"}
                        valueField={"value"}
                        onChange={(item) => {
                          setReadingLevel(item.value);
                        }}
                      />
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex-row justify-center items-center gap-10 full h-[6rem] ">
                <TouchableOpacity
                  className="w-20 h-10 rounded-md justify-center items-center bg-red-500"
                  onPress={() => {
                    setIsLoadingCancel(true);
                    setIsEdit(false);
                    setIsLoadingCancel(false);
                  }}
                >
                  {isLoadingCancel ? (
                    <FontAwesome5 name="spinner" size={24} color="gray" />
                  ) : (
                    <Text className="text-white font-bold">Cancel</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex rounded-md justify-center items-center w-20 h-10 bg-green-500"
                  onPress={() => saveUserData()}
                >
                  {isLoadingSave ? (
                    <Animated.View style={rotateStyle}>
                      <FontAwesome5 name="spinner" size={24} color="gray" />
                    </Animated.View>
                  ) : (
                    // <FontAwesome5 name="spinner" size={24} color="black" />
                    <Text className="text-white font-bold">Save</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        ) : (
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
                    {userData.username}
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
                  {userData.full_name ? (
                    <Text className="text-[15px] font-bold text-gray-900 mt-1">
                      {userData.full_name}
                    </Text>
                  ) : (
                    <Text className="text-[15px] font-bold text-gray-400 mt-1">
                      Not Provided
                    </Text>
                  )}
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
                  {userData.email ? (
                    <Text className="text-[15px] font-bold text-gray-900 mt-1">
                      {userData.email}
                    </Text>
                  ) : (
                    <Text className="text-[15px] font-bold text-gray-400 mt-1">
                      Not Provided
                    </Text>
                  )}
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

                  {userData.telephone ? (
                    <Text className="text-[15px] font-bold text-gray-900 mt-1">
                      {userData.telephone}
                    </Text>
                  ) : (
                    <Text className="text-[15px] font-bold text-gray-400 mt-1">
                      Not Provided
                    </Text>
                  )}
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
                    {userData.reading_level}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
