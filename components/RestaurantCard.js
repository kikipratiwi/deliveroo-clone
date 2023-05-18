import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import RatingRow from './RatingRow';
import LocationRow from './LocationRow';
import { urlFor } from '../sanity';

export default function RestaurantCard({
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
}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            className="bg-white mr-3 shadow"
            onPress={() =>
                navigation.navigate('Restaurant', {
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
                })
            }
        >
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                className="h-36 w-64 rounded-sm"
            />

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>

                <RatingRow rating={rating} genre={genre} />

                <LocationRow address={address} />
            </View>
        </TouchableOpacity>
    );
}
