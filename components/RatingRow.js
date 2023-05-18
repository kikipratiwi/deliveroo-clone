import { StarIcon } from 'react-native-heroicons/solid';
import { View, Text } from 'react-native';
import React from 'react';

export default function RatingRow({ rating, genre }) {
    return (
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">
                    {(Math.floor(rating * 100) / 100).toFixed(1)}
                </Text>{' '}
                · {genre}
            </Text>
        </View>
    );
}
