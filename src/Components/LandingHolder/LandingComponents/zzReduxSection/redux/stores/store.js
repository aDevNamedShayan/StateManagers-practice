import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice'
import headerReducer from '../slices/headerSlice'
import studentReducer from '../slices/studentSlice'
import friendReducer from '../slices/friendSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        headerTxt: headerReducer,
        studentName: studentReducer,
        friendTxt: friendReducer,
    }
});