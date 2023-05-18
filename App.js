import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import 'react-native-url-polyfill/auto';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen
                        name="Restaurant"
                        component={RestaurantScreen}
                    />
                </Stack.Navigator>
                <StatusBar style="auto" />
            </TailwindProvider>
        </NavigationContainer>
    );
}
