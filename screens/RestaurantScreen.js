import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    QuestionMarkCircleIcon,
} from 'react-native-heroicons/outline';

import DishRow from '../components/DishRow';
import LocationRow from '../components/LocationRow';
import RatingRow from '../components/RatingRow';

import { urlFor } from '../sanity';

export default function RestaurantScreen() {
    const navigation = useNavigation();
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat,
        },
    } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // console.log(title);

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: urlFor(imgUrl).url(),
                    }}
                    className="w-full h-56 bg-gray-300 p-4"
                />

                <TouchableOpacity
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    onPress={navigation.goBack}
                >
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>

                    <View className="flex-row space-x-2 my-1">
                        <View>
                            <RatingRow rating={rating} genre={genre} />
                        </View>

                        <View>
                            <LocationRow address={address} />
                        </View>
                    </View>

                    <Text className="text-gray-500 mt-2 pb-2">
                        {shortDescription}
                    </Text>
                </View>

                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon
                        color="gray"
                        opacity={0.6}
                        size={20}
                    />

                    <Text className="pl-2 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>

                    <ChevronRightIcon color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View>
                <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

                {/* Dishrows */}
                {dishes?.length > 0 &&
                    dishes.map(
                        ({ _id, name, short_description, price, image }) => (
                            <DishRow
                                key={_id}
                                id={_id}
                                name={name}
                                price={price}
                                image={image}
                                shortDescription={short_description}
                            />
                        ),
                    )}
            </View>
        </ScrollView>
    );
}
