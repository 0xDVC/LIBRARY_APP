import SearchInput from '@/components/SearchInput';
import React, { useState, useEffect } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalList from '@/components/Listing/HorizontalListing';
import { Book } from '@/components/Book/BigBookCard';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import SmallBookCard from '@/components/Book/SmallBookCard';
import VerticalList from '@/components/Listing/VerticalListing';

export default function Home() {
    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=rich-dad-poor-dad');
            const data = await response.json();
            setBooks(data.items);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView className="h-full px-4 bg-amber-50">
                <ScrollView>
                    <View>
                        <Text className="text-center text-2xl p-5 font-pbold">Discover</Text>
                    </View>

                    <SearchInput placeholder="Search by book or Library" />

                    <View className="w-full flex-1 pt-5 pb-8">
                        <Text className="font-psemibold text-lg mb-2">Recommended for you</Text>

                        <HorizontalList books={books} isLoading={isLoading} />
                    </View>
                    <VerticalList books={books} isLoading={isLoading} />
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}