import React, {useState} from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import { validateEmail, validatePhoneNumber } from '@/utils/validationUtils';
import FormFeedbackModal from "@/components/FormFeedbackModal";
import { Colors } from "@/constants/Colors";
import {Link} from "expo-router";
import Checkbox from "@/components/Checkbox";

export default function SignIn() {
    const [form, setForm] = React.useState({
        email: "",
        phoneNumber: "",
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState('');
    const [modalType, setModalType] = React.useState<'success' | 'error'>('error');


    const handleChangeText = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    };

    const showModal = (message: string, type: 'success' | 'error') => {
        setModalMessage(message);
        setModalType(type);
        setModalVisible(true);
    };


    const handleSignIn = () => {
        const { email, phoneNumber } = form;
        const isEmail = email.includes('@');

        const isEmailInput = isEmail && email.trim() !== '';
        const isPhoneInput = !isEmail && phoneNumber.trim() !== '';

        if (isEmailInput) {
            if (!validateEmail(email)) {
                showModal('Please enter a valid email address.', 'error');
                return;
            }
        } else if (isPhoneInput) {
            if (!validatePhoneNumber(phoneNumber)) {
                showModal('Please enter a valid phone number.', 'error');
                return;
            }
        } else {
            showModal('Please enter a valid email address or phone number.', 'error');
            return;
        }

        showModal('Sign up successful!', 'success');
    };

    const [ isSubmitting, setIsSubmitting ] = React.useState(false);

    const handlePress = async () => {
        setIsSubmitting(true);
        handleSignIn();
        setIsSubmitting(false);
    };

    return (
        <SafeAreaView className="h-full" style={{backgroundColor: Colors.light.background}}>
            <ScrollView>
                <View className="w-full px-4 my-6 justify-center h-full">
                    <Text className="font-pbold text-center text-4xl mt-[35px]">
                        Sign In
                    </Text>
                    <Text className="font-pregular text-center mt-4">
                        Welcome Back!
                    </Text>
                    <FormField
                        title="Email or Phone Number"
                        icon="mail-outline"
                        placeholder=" Enter Email or Phone Number"
                        value={form.email || form.phoneNumber}
                        handleChangeText={(text) => {
                            if (text.includes('@')) {
                                handleChangeText('email', text);
                            } else {
                                handleChangeText('phoneNumber', text);
                            }
                        }}
                        otherStyles="mt-4"
                    />

                    <View className="justify-start mt-4">
                        <Checkbox
                            text="Remember me"
                            checked={isChecked}
                            onChange={handleCheckboxChange}/>
                    </View>



                    <View className="mt-20">
                        <Button
                            text="Sign In"
                            onPress={handlePress}
                            loading={isSubmitting}
                            variant="primary"
                            size="large"
                            color={Colors.light.primary}
                            fullWidth
                        />
                    </View>
                    <View className="mt-4 justify-center items-center">
                        <Text className="font-pregular">
                            Don't have an account?{' '}
                            <Text style={{color: Colors.light.primary}}>
                                <Link href="/sign-up" className="font-pmedium">Sign In</Link>
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <FormFeedbackModal
                visible={modalVisible}
                message={modalMessage}
                type={modalType}
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaView>
    );
}
