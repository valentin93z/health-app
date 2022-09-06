import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    activity: 1.2,
    result: null,
}

export const caloriesSlice = createSlice({
    name: 'calories',
    initialState,
    reducers: {
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setAge: (state, action) => {
            if (action.payload >= 0 && action.payload <= 99 && action.payload.length <= 2) {
                state.age = action.payload;
            }
        },
        setHeight: (state, action) => {
            if (action.payload >= 0 && action.payload <= 255 && action.payload.length <= 3) {
                state.height = action.payload;
            }
        },
        setWeight: (state, action) => {
            if (action.payload >= 0 && action.payload <= 255 && action.payload.length <= 3) {
                state.weight = action.payload;
            }
        },
        setActivity: (state, action) => {
            state.activity = action.payload;
        },
        setReset: (state) => {
            state.gender = 'male';
            state.age = '';
            state.height = '';
            state.weight = '';
            state.activity = 1.2;
            state.result = null;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        }
    }
})

export const { setGender, setAge, setHeight, setWeight, setActivity, setReset, setResult } = caloriesSlice.actions;

export default caloriesSlice.reducer;