import React, { useLayoutEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    ChevronDownIcon,
    UserIcon,
    AdjustmentsVerticalIcon,
    MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories.js';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru',
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-lg">
                        Current Location
                        <ChevronDownIcon
                            size={18}
                            color="#00CCBB"
                            style={{ marginLeft: 5 }}
                        />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>

                <AdjustmentsVerticalIcon size={35} color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* Caregories */}
                <Categories />

                {/* Featured Rows */}
            </ScrollView>
        </SafeAreaView>
    );
}
