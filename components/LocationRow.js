import { MapPinIcon } from 'react-native-heroicons/solid';
import { View, Text } from 'react-native';
import React from 'react';

export default function LocationRow({ address }) {
    return (
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
    );
}
