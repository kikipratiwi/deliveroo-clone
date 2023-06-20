import 'react-native-url-polyfill/auto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';

import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import BasketScreen from './screens/BasketScreen';

import { store } from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <TailwindProvider>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                        <Stack.Screen name="Basket" component={BasketScreen} options={{presentation:"modal", headerShown: false}} />
                    </Stack.Navigator>
                    <StatusBar style="auto" />
                </TailwindProvider>
            </Provider>
        </NavigationContainer>
    );
}
