import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface TabIconProps {
    icon: React.ComponentProps<typeof Ionicons>['name'];
    name: string;
    focused: boolean;
    color: string;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, name, focused, color }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Ionicons
                name={icon}
                size={28}
                color={color}
                className="mb-1"
            />
            <Text className={`text-xs ${focused ? 'font-pbold' : 'font-pregular'}`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    );
};

export default TabIcon;