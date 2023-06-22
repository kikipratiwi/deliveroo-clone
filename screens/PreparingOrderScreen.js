import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function PreparingOrderScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 4000);
    }, []);

    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-[#04e3f3]">
            <Animatable.Image
                source={require('../assets/map.gif')}
                animation="slideInUp"
                iterationCount={1}
                className="h-40 w-40"
            />

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center"
            >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>
        </SafeAreaView>
    );
}
