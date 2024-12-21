import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Dohn Joe"
}

const studentSlice = createSlice({
    name: "studentName",
    initialState,
    reducers:{
        setStudentName: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setStudentName } = studentSlice.actions;

export default studentSlice.reducer;