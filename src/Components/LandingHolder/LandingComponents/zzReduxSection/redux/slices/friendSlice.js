import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "shapor"
}

const friendSlice = createSlice({
    name: "friendTxt",
    initialState,
    reducers:{
        setFriend: (state, action) => { state.value = action.payload }
    }
})

export const { setFriend } = friendSlice.actions

export default friendSlice.reducer