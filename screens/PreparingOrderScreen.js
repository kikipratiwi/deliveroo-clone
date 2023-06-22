import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import React, { useEffect } from 'react';

export default function PreparingOrderScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 4000);
    }, []);

    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-[#00CCBB]">
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

            <Progress.Bar size={30} color="white" indeterminate={true} />
        </SafeAreaView>
    );
}
