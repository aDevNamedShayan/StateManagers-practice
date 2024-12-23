import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload
        })
        .addCase(decrementAsync.fulfilled, (state, action) => {
            state.value -= action.payload
        })
    }
})

export const incrementAsync = createAsyncThunk(
    'AsyncIncrement',
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)

export const decrementAsync = createAsyncThunk(
    'AsyncDecrement',
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount;
    }
)

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer