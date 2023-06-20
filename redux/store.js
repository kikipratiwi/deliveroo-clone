import { configureStore } from '@reduxjs/toolkit';
import baskterReducer from './reducer/basketSlice';
import restaurantReducer from './reducer/restaurantSlice';

export const store = configureStore({
    reducer: { basket: baskterReducer, restaurant: restaurantReducer },
});
