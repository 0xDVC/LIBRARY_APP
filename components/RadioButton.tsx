import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface RadioButtonProps {
    label: string;
    value: string;
    selected: boolean;
    handleRadioButtonPress: (value: string) => void;
    otherStyles?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, selected, handleRadioButtonPress, otherStyles }) => {
    return (
        <TouchableOpacity
            className={`flex-row space-x-2 ${otherStyles}`}
            onPress={() => handleRadioButtonPress(value)}
        >
            <View
                className={`w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center ${selected ? 'border-blue-500' : ''}`}
            >
                {selected && <View className="w-3 h-3 rounded-full bg-blue-500" />}
            </View>
            <Text className="text-black">{label}</Text>
        </TouchableOpacity>
    );
};

export default RadioButton;
