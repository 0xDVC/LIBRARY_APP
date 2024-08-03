import React from 'react';
import { Tabs } from "expo-router";
import TabIcon from "@/components/TabIcon";
import { Colors } from "@/constants/Colors";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: Colors.light.primary,
                    tabBarInactiveTintColor: Colors.light.inactive,
                    tabBarStyle: {
                        backgroundColor: Colors.light.background,
                        height: 100,
                    },
                }}
            >
                {/*Home Screen*/}
                <Tabs.Screen
                    name={"home"}
                    options={{
                        title: "Discover",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="book"
                                name="Discover" // Ionicons name
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />

                {/*Library Screen*/}
                <Tabs.Screen
                    name={"library"}
                    options={{
                        title: "Library",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="library"
                                name="Library"
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />

                {/*Settings Screen*/}
                <Tabs.Screen
                    name={"setting"}
                    options={{
                        title: "Settings",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon="settings"
                                name="Settings" // Ionicons name
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}
