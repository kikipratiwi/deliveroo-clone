import { configureStore } from '@reduxjs/toolkit';
import baskterReducer from './reducer/basketSlice';

export const store = configureStore({
    reducer: { basket: baskterReducer },
});
