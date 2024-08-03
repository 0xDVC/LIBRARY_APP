import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from "react-native";
import FormField from "@/components/FormField";


export default function SignIn() {
    const [ form, setForm ] = React.useState({
        email: "",
        password: "",
    });

    return (
        <SafeAreaView className={"h-full bg-amber-50"}>

            <ScrollView>
                <View className={"h-full w-full px-4 my-6 items-center justify-center min-h-[85vh]"}>
                    <Text className={"font-pbold text-4xl"}>Sign In</Text>
                    <Text className={"font-pregular text-center mt-2"}>Create a new account quickly and easily to get started</Text>
                </View>

                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(email) => setForm({...form,
                        email: email})}
                    otherStyles={"mt-4"}
                    keyboardType={"email-address"}
                />

                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(password) => setForm({...form,
                        password: password})}
                    otherStyles={"mt-4"}
                />
            </ScrollView>
        </SafeAreaView>
    );
}