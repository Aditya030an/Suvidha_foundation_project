import { createSlice, configureStore } from '@reduxjs/toolkit'
const stateHandleSlice = createSlice({
    name:"stateHandle",
    initialState:{
        showVideo:false,
    },
    reducers:{
        setShowVideo:(state , action)=>{
            state.showVideo = action.payload;
        }
    }
})

export const {setShowVideo} = stateHandleSlice.actions;
export default stateHandleSlice.reducer;