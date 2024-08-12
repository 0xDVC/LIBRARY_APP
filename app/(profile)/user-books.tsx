import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useRoute, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { IBookTabs } from "@/types/types";

export default function UserBooks() {
  const route = useRoute<RouteProp<{ params: IBookTabs }, "params">>();
  const { c_tab } = route.params;
  const [tab, setTab] = useState(c_tab);
  const { back } = useRouter();

  return (
    <SafeAreaView className="h-full w-full bg-white flex">
      <View className="mt-5 flex-row justify-between items-center relative">
        <View className="absolute left-5 h-7 w-7 rounded-full bg-gray-200 flex-row justify-center items-center">
          <TouchableOpacity onPress={back}>
            <AntDesign name="arrowleft" size={22} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold text-black"> My Books</Text>
        </View>
      </View>
      <View className="w-full border-t border-gray-200 h-14 mt-5 flex-row ">
        <TouchableOpacity
          onPress={() => setTab(0)}
          className={`flex-1 px-5 border-b-4 border-gray-200 ${
            tab == 0 && "border-[#6557ec] border-r"
          }  justify-center items-center`}
        >
          <Text
            className={`${
              tab == 0 ? "text-[#6557ec]" : "text-gray-500"
            } font-bold text-md text-[15px]`}
          >
            Favorites
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(1)}
          className={`flex-1 px-5 border-b-4 border-gray-200 ${
            tab == 1 && "border-[#6557ec] border-l border-r "
          }  justify-center items-center`}
        >
          <Text
            className={`${
              tab == 1 ? "text-[#6557ec]" : "text-gray-500"
            } font-bold text-md text-[15px]`}
          >
            My books
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(2)}
          className={`flex-1 px-5 border-b-4 border-gray-200 ${
            tab == 2 && "border-[#6557ec] border-l "
          }  justify-center items-center`}
        >
          <Text
            className={`${
              tab == 2 ? "text-[#6557ec]" : "text-gray-500"
            } font-black text-md text-[15px]`}
          >
            Bookmark
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="w-full h-full flex mt-2 px-4">
        <TouchableOpacity className="h-32 w-full border border-gray-300 rounded-xl my-2 flex-row items-center px-3 shadow-custom">
          <View className="w-24 h-24  mr-2 rounded-md">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-24 h-24 rounded-md"
            />
          </View>
          <View className="flex-1 h-24 flex ml-3">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-[15px] font-bold mb-1">Harry Potter</Text>
                <Text className="text-[13px] font-bold text-gray-500">
                  Neil Ohene
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Rating
                </Text>
                <Text className="text-[13px] font-black text-red-500">4.5</Text>
              </View>
            </View>
            <View className="mt-2 h-3  bg-[#8080802a] rounded-lg">
              <LinearGradient
                colors={["#6557ec", "#2B5CD4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "50%", height: "100%", borderRadius: 8 }}
              />
            </View>
            <View className="mt-2 flex-row justify-between">
              <View>
                <Text className="text-[10px] font-bold text-gray-500">
                  Last Read
                </Text>
                <Text className="text-[12px] font-bold text-gray-900">
                  12 November 2024
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Pages
                </Text>
                <Text className="text-[13px] font-black  text-yellow-500">
                  120
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="h-32 w-full border border-gray-300 rounded-xl my-2 flex-row items-center px-3 shadow-custom">
          <View className="w-24 h-24  mr-2 rounded-md">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-24 h-24 rounded-md"
            />
          </View>
          <View className="flex-1 h-24 flex ml-3">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-[15px] font-bold mb-1">Harry Potter</Text>
                <Text className="text-[13px] font-bold text-gray-500">
                  Neil Ohene
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Rating
                </Text>
                <Text className="text-[13px] font-black text-red-500">4.5</Text>
              </View>
            </View>
            <View className="mt-2 h-3  bg-[#8080802a] rounded-lg">
              <LinearGradient
                colors={["#6557ec", "#2B5CD4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "50%", height: "100%", borderRadius: 8 }}
              />
            </View>
            <View className="mt-2 flex-row justify-between">
              <View>
                <Text className="text-[10px] font-bold text-gray-500">
                  Last Read
                </Text>
                <Text className="text-[12px] font-bold text-gray-900">
                  12 November 2024
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Pages
                </Text>
                <Text className="text-[13px] font-black  text-yellow-500">
                  120
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="h-32 w-full border border-gray-300 rounded-xl my-2 flex-row items-center px-3 shadow-custom">
          <View className="w-24 h-24  mr-2 rounded-md">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-24 h-24 rounded-md"
            />
          </View>
          <View className="flex-1 h-24 flex ml-3">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-[15px] font-bold mb-1">Harry Potter</Text>
                <Text className="text-[13px] font-bold text-gray-500">
                  Neil Ohene
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Rating
                </Text>
                <Text className="text-[13px] font-black text-red-500">4.5</Text>
              </View>
            </View>
            <View className="mt-2 h-3  bg-[#8080802a] rounded-lg">
              <LinearGradient
                colors={["#6557ec", "#2B5CD4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "50%", height: "100%", borderRadius: 8 }}
              />
            </View>
            <View className="mt-2 flex-row justify-between">
              <View>
                <Text className="text-[10px] font-bold text-gray-500">
                  Last Read
                </Text>
                <Text className="text-[12px] font-bold text-gray-900">
                  12 November 2024
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Pages
                </Text>
                <Text className="text-[13px] font-black  text-yellow-500">
                  120
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="h-32 w-full border border-gray-300 rounded-xl my-2 flex-row items-center px-3 shadow-custom">
          <View className="w-24 h-24  mr-2 rounded-md">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-24 h-24 rounded-md"
            />
          </View>
          <View className="flex-1 h-24 flex ml-3">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-[15px] font-bold mb-1">Harry Potter</Text>
                <Text className="text-[13px] font-bold text-gray-500">
                  Neil Ohene
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Rating
                </Text>
                <Text className="text-[13px] font-black text-red-500">4.5</Text>
              </View>
            </View>
            <View className="mt-2 h-3  bg-[#8080802a] rounded-lg">
              <LinearGradient
                colors={["#6557ec", "#2B5CD4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "50%", height: "100%", borderRadius: 8 }}
              />
            </View>
            <View className="mt-2 flex-row justify-between">
              <View>
                <Text className="text-[10px] font-bold text-gray-500">
                  Last Read
                </Text>
                <Text className="text-[12px] font-bold text-gray-900">
                  12 November 2024
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Pages
                </Text>
                <Text className="text-[13px] font-black  text-yellow-500">
                  120
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="h-32 w-full border border-gray-300 rounded-xl my-2 flex-row items-center px-3 shadow-custom">
          <View className="w-24 h-24  mr-2 rounded-md">
            <Image
              source={require("../../assets/images/profile.jpg")}
              className="w-24 h-24 rounded-md"
            />
          </View>
          <View className="flex-1 h-24 flex ml-3">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-[15px] font-bold mb-1">Harry Potter</Text>
                <Text className="text-[13px] font-bold text-gray-500">
                  Neil Ohene
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Rating
                </Text>
                <Text className="text-[13px] font-black text-red-500">4.5</Text>
              </View>
            </View>
            <View className="mt-2 h-3  bg-[#8080802a] rounded-lg">
              <LinearGradient
                colors={["#6557ec", "#2B5CD4"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "50%", height: "100%", borderRadius: 8 }}
              />
            </View>
            <View className="mt-2 flex-row justify-between">
              <View>
                <Text className="text-[10px] font-bold text-gray-500">
                  Last Read
                </Text>
                <Text className="text-[12px] font-bold text-gray-900">
                  12 November 2024
                </Text>
              </View>

              <View>
                <Text className="text-[12px] font-bold text-gray-500">
                  Pages
                </Text>
                <Text className="text-[13px] font-black  text-yellow-500">
                  120
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
