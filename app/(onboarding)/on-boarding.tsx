import { useState, useRef, useCallback } from "react";
import {
  Animated,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Onboarding() {
  const [page, setPage] = useState(0);
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = Dimensions.get("window");

  const images = [
    require("../../assets/images/pic1.png"),
    require("../../assets/images/pic2.png"),
    require("../../assets/images/pic3.png"),
  ];

  const handleNext = () => {
    if (page < images.length - 1) {
      const nextPage = page + 1;
      setPage(page + 1);
      //   @ts-ignore
      scrollViewRef.current?.scrollTo({
        x: nextPage * windowWidth * 0.9,
        animated: true,
      });
    }
  };
  const handleBack = () => {
    if (page > 0) {
      const prevPage = page - 1;
      setPage(prevPage);
      //   @ts-ignore
      scrollViewRef.current?.scrollTo({
        x: prevPage * windowWidth,
        animated: true,
      });
    }
  };

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      scrollX.setValue(offsetX);
      const newPage = Math.round(offsetX / windowWidth);
      if (newPage !== page) {
        setPage(newPage);
      }
    },
    [page, windowWidth]
  );
  return (
    <SafeAreaView className="h-full w-full flex bg-white">
      <View className="w-full flex">
        <View className="mt-5 flex-row justify-between items-center relative px-6">
          <View className="h-7 w-7 rounded-full bg-gray-200 flex-row justify-center items-center">
            <TouchableOpacity onPress={handleBack}>
              <AntDesign name="arrowleft" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-gray-200 px-1 py-1 rounded-full">
            <Text className="text-md font-bold text-gray-600"> Skip </Text>
          </TouchableOpacity>
        </View>

        <View className="flex">
          <View className="mt-10  h-80 w-[90%] self-center">
            <Animated.ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            >
              {images.map((image, imageIndex) => (
                <Image
                  key={imageIndex}
                  source={image}
                  style={{
                    width: windowWidth * 0.9,
                    height: 320,
                    resizeMode: "contain",
                  }}
                />
              ))}
            </Animated.ScrollView>
          </View>

          <View className="mt-2 flex justify-center items-center  self-center w-60">
            <Text className="text-3xl font-bold space-y-4 text-center mt-5">
              {"Welcome to \n Biblio"}
            </Text>

            <Text className="font-bold text-gray-400 mt-5 text-center w-[80%]">
              Discover a new way to access your favorite books right at your
              doorstep
            </Text>
          </View>

          <View className="mt-10 flex justify-center items-center">
            <TouchableOpacity
              className="bg-[#6557ec] flex justify-center items-center h-12 w-40 rounded-lg"
              onPress={handleNext}
            >
              <Text className="text-lg font-bold font-Poppins-Bold text-white mt-5 h-full">
                {page === 2 ? "Finish" : "Next"}
              </Text>
            </TouchableOpacity>

            <View className="self-center w-12 mt-10 h-1 flex-row justify-center items-center ">
              {images.map((_, i) => (
                <View
                  key={i}
                  className={`bg-black h-1 w-${
                    page === i ? 6 : 3
                  } mx-1 rounded-full`}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
