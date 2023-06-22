import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../redux/reducer/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';

import MapView, { Marker } from 'react-native-maps';

export default function DeliveryScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="from-zinc-500">
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XMarkIcon size={30} color="white" />
                    </TouchableOpacity>

                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estiated Arrival</Text>
                            <Text className="text-4xl font-bold">44-45 Minutes</Text>
                        </View>

                        <Image
                            source={{ uri: 'https://links.papareact.com/fls' }}
                            className="h-20 w-20"
                        />
                    </View>

                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>

            {/* Note: Latitude and longitude should be got from restaurant data */}
            <MapView
                initialRegion={{
                    latitude: 51.51923880936022,
                    longitude: -0.1323491652193389,
                    latitudeDelta: 0.005,
                    longittudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 -z-10"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{ latitude: 51.51923880936022, longitude: -0.1323491652193389 }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
                />

                <View className="flex-1">
                    <Text className="text-lg">Sony Sangha</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>

                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    );
}
