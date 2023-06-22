import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { urlFor } from '../sanity';
import LocationRow from './LocationRow';
import RatingRow from './RatingRow';

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
