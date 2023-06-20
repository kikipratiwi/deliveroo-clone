import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import Currency from 'react-currency-formatter';
import React from 'react';

import { selectBasketItems, selectBasketTotal } from '../redux/reducer/basketSlice';

export default function BasketIcon() {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const navigation = useNavigation();

    if (items.length < 1) return null;

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity
                onPress={() => navigation.navigate('Basket')}
                className="mx-5 flex-row bg-[#00CCBB] p-4 rounded-lg items-center space-x-1"
            >
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
                    {items.length}
                </Text>
                <Text className="flex-1 text-white font-extrabold text-center text-lg">
                    View Basket
                </Text>
                <Text className="text-lg text-white font-extrabold">
                    <Currency quantity={basketTotal} currency="GBP" />
                </Text>
            </TouchableOpacity>
        </View>
    );
}
