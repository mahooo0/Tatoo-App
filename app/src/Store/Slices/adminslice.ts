// src/store/slices/exampleSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type editData = {
    ColloctionName: string;
    data: any;
};
interface State {
    value: number;
    showpanel1: boolean;
    showpanel2: boolean;
    showpanel3: boolean;
    RequestReset: boolean;
    editData: editData | undefined;
}

const initialState: State = {
    value: 0,
    showpanel1: false,
    showpanel2: false,
    showpanel3: false,
    RequestReset: false,
    editData: undefined,
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
        reset(state) {
            state.RequestReset = !state.RequestReset;
        },
        seteditData(state, action: PayloadAction<editData>) {
            state.editData = action.payload;
        },
        ReseteditData(state) {
            state.editData = undefined;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const {
    setshowpanel3,
    ReseteditData,
    seteditData,
    setshowpanel2,
    setshowpanel1,
} = exampleSlice.actions;

export default exampleSlice.reducer;
