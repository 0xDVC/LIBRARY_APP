import React, {useState} from 'react'
import OTPEntry from "@/components/OTPEntry";
import {SafeAreaView, View, Text, ScrollView} from "react-native";
import { Colors } from "@/constants/Colors";
import CountdownTimer from "@/components/Countdown";
import Button from "@/components/Button/Button";

export default function Verify() {
    const [ otp, setOtp ] = useState('');
    const value = '+233-509894026';
    return (
        <SafeAreaView className="h-full" style={{backgroundColor: Colors.light.background}}>
            <ScrollView>
                <View className="w-full px-4 justify-center h-full">
                    <Text className="font-pbold text-4xl text-center mt-[70px]">We just sent you a 6-digit code</Text>

                    <Text className="font-pregular mt-4 mb-10 text-center">
                        Please enter the code we've sent to{' '}
                        <Text className="font-psemibold">{value}</Text>
                    </Text>

                    <OTPEntry
                        value={otp}
                        onChange={setOtp}>
                    </OTPEntry>

                    <CountdownTimer initialSeconds={30} />
                    <View className="mt-[35px]">
                        <Button
                            text="Didn't receive the code?"
                            variant="transparent"
                            color={Colors.light.primary}
                            onPress={() => {}}

                        />
                    </View>
                </View>




            </ScrollView>


        </SafeAreaView>

    );
}