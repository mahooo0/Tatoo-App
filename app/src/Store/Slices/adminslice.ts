// src/store/slices/exampleSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
    value: number;
    showpanel1: boolean;
    showpanel2: boolean;
    showpanel3: boolean;
}

const initialState: State = {
    value: 0,
    showpanel1: false,
    showpanel2: false,
    showpanel3: false,
};

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        setshowpanel1(state, action: PayloadAction<boolean>) {
            state.showpanel1 = action.payload;
        },
        setshowpanel2(state, action: PayloadAction<boolean>) {
            state.showpanel2 = action.payload;
        },
        setshowpanel3(state, action: PayloadAction<boolean>) {
            state.showpanel3 = action.payload;
        },
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const { setshowpanel3, decrement, setshowpanel2, setshowpanel1 } =
    exampleSlice.actions;

export default exampleSlice.reducer;
