import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(({ id }) => id === action.payload.id);
            let newbBasket = [...state.items];

            if (index >= 0) {
                newbBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product ${action.payload.name} as it's not in the basket`,
                );
            }

            state.items = newbBasket;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
    state.basket.items.filter(({ id: basketId }) => basketId === id);

export const selectBasketTotal = (state) =>
    state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
