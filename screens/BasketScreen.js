import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { XCircleIcon } from 'react-native-heroicons/solid';
import Currency from 'react-currency-formatter';
import React, { useMemo } from 'react';

import { selectRestaurant } from '../redux/reducer/restaurantSlice';
import {
    removeFromBasket,
    selectBasketItems,
    selectBasketTotal,
} from '../redux/reducer/basketSlice';
import { urlFor } from '../sanity';

export default function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const dispatch = useDispatch();

    const grouppedItemsInBasket = useMemo(() => groupItem(items), [items]);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="relative p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                    <Text className="text-lg text-center font-bold">Basket</Text>
                    <Text className="text-center ">{restaurant.title}</Text>
                    <TouchableOpacity
                        className="absolute top-3 right-5 bg-grey-100 rounded-full"
                        onPress={navigation.goBack}
                    >
                        <XCircleIcon size={50} color="#00CCBB" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-3 my-5 bg-white">
                    <Image
                        className="h-7 w-9 bg-gray-300 p-4 rounded-full"
                        source={{
                            uri: 'https:/links.papareact.com/wru',
                        }}
                    />
                    <Text className="flex-1">Deliver in 50-70 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(grouppedItemsInBasket).map(([key, items]) => (
                        <View
                            key={key}
                            className="flex-row items-center space-x-3 px-5 py-2 bg-white"
                        >
                            <Text className="text-[#00CCBB]">{items.length} x</Text>
                            <Image
                                source={{ uri: urlFor(items[0]?.image).url() }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>

                            <Text className="text-gray-600">
                                <Currency quantity={items?.[0]?.price || 0} currency="GBP" />
                            </Text>

                            <TouchableOpacity>
                                <Text
                                    className="text-[#00CCBB] text-xs"
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={basketTotal} currency="GBP" />
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">
                            <Currency quantity={5.99} currency="GBP" />
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">
                            <Currency quantity={basketTotal + 5.99} currency="GBP" />
                        </Text>
                    </View>

                    <TouchableOpacity
                        className="rounded-lg bg-[#00CCBB] p-4"
                        onPress={() => navigation.navigate('PreparingOrder')}
                    >
                        <Text className="text-center text-white text-lg font-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const groupItem = (items) => {
    return items.reduce((results, items) => {
        (results[items.id] = results[items.id] || []).push(items);
        return results;
    }, {});
};
