import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { urlFor } from '../sanity';

export default function CategoryCard({ imgUrl, title }) {
    return (
        <TouchableOpacity className="relative mr-2">
            <View className="flex h-screen justify-center items-center flex-col">
                <ImageBackground
                    source={{ uri: urlFor(imgUrl).url() }}
                    className="h-20 w-20 rounded bg-cover bg-center"
                >
                    <View className="w-full h-full flex justify-center items-center backdrop-saturate-200 bg-black/40">
                        <Text
                            className="absolute bottom-1 left-1 text-white font-bold pl-1 hyphens-auto"
                            lang="en"
                        >
                            {title}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}
