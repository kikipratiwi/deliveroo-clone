import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import React, { useState } from 'react';

import { urlFor } from '../sanity';
import {
    addToBasket,
    removeFromBasket,
    selectBasketItemsWithId,
} from '../redux/reducer/basketSlice';

const DishRow = ({ id, name, shortDescription, price, image }) => {
    const [isPressed, setIsPressed] = useState(false);
    const itemsLength = useSelector((state) => selectBasketItemsWithId(state, id))?.length;
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, shortDescription, price, image }));
    };

    const removeItemFromBasket = () => {
        if (!itemsLength) return;

        dispatch(removeFromBasket({ id, name }));
    };

    return (
        <>
            <TouchableOpacity
                className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}
                onPress={() => setIsPressed(!isPressed)}
            >
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{shortDescription}</Text>
                        <Text className="text-gray-600 mt-2">
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

            {isPressed && (
                <View className="bg-white px-4 pb-3">
                    <View className="flex-row items-center space-x-2">
                        <TouchableOpacity onPress={removeItemFromBasket} disabled={itemsLength < 1}>
                            <MinusCircleIcon
                                color={itemsLength < 1 ? 'gray' : '#00CCBB'}
                                size={40}
                            />
                        </TouchableOpacity>

                        <Text>{itemsLength}</Text>

                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon color="#00CCBB" size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
};

export default DishRow;
