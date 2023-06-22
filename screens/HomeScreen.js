import {
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    UserIcon,
} from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';

import { GET_FEATURED } from '../queries';
import Categories from '../components/Categories.js';
import FeaturedRow from '../components/FeaturedRow.js';
import sanityClient from '../sanity.js';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(GET_FEATURED)
            .then((data) => {
                setFeaturedCategories(data);
            })
            .catch((err) => {
                console.error('error', err);
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
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-lg">
                        Current Location
                        <ChevronDownIcon size={18} color="#00CCBB" style={{ marginLeft: 5 }} />
                    </Text>
                </View>

                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
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
                {featuredCategories.length > 0 &&
                    featuredCategories.map(({ _id: id, name, short_description }) => {
                        return (
                            <FeaturedRow
                                key={id}
                                id={id}
                                title={name}
                                description={short_description}
                            />
                        );
                    })}
            </ScrollView>
        </SafeAreaView>
    );
}
