import { View, Text, TouchableOpacity, Image } from 'react-native';
import Currency from 'react-currency-formatter';
import React from 'react';

import { urlFor } from '../sanity';

const DishRow = ({ name, shortDescription, price, image }) => {
    return (
        <TouchableOpacity className="bg-white border p-4 border-gray-200">
            <View className="flex-row">
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{shortDescription}</Text>
                    <Text className="text-gray-400 mt-2">
                        <Currency quantity={price} currency="GBP" />
                    </Text>
                </View>

                <View>
                    <Image
                        style={{
                            borderWidth: 1,
                            borderColor: '#F3F3F4',
                        }}
                        source={{
                            uri: urlFor(image).url(),
                        }}
                        className="w-20 h-20 bg-gray-300 p-4"
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DishRow;
