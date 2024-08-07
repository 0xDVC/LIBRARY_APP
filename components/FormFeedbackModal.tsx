import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur'; // Import from expo-blur

interface FormFeedbackModalProps {
    visible: boolean;
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}



const FormFeedbackModal: React.FC<FormFeedbackModalProps> = ({ visible, message, type, onClose }) => {
    return (
        <Modal transparent visible={visible} animationType="slide">
            <TouchableWithoutFeedback onPress={onClose} className=''>
                <View className=" h-full  flex-col relative">

                    <BlurView style={{ flex: 1, width: '100%' }} intensity={6} tint="systemMaterialDark">
                        <TouchableWithoutFeedback>
                            <View className="w-full bg-white rounded-t-lg p-5 items-center absolute bottom-0">
                                <View
                                    className={`border-2 rounded-lg p-5 items-center ${type === 'success' ? 'border-green-500' : 'border-red-500'}`}
                                >
                                    <Text
                                        className={`text-xl font-bold mb-2 ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}
                                    >
                                        {type === 'success' ? 'Success' : 'Error'}
                                    </Text>
                                    <Text className="text-base text-center mb-5">{message}</Text>
                                    <TouchableOpacity
                                        className="bg-blue-500 py-2 px-4 rounded"
                                        onPress={onClose}
                                    >
                                        <Text className="text-white font-bold">Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </BlurView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default FormFeedbackModal;
