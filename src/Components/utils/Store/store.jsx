import { configureStore } from "@reduxjs/toolkit";
import stateHandleSlices from "./stateHandleSlices";

const store = configureStore({
    reducer:{
        stateHandle:stateHandleSlices,
    }
})
export default store;