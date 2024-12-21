import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "ریداکس💪"
}

const headerSlice = createSlice({
    name: "headerTxt",
    initialState,
    reducers:{
        setHeader: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setHeader } = headerSlice.actions

export default headerSlice.reducer