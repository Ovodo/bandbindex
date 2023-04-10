import { createSlice } from "@reduxjs/toolkit";
import { pointArray } from "../../data/Days";

const initialState = {
  User:'',
  Points:0,
  Claimed:false,
  dailyClaim:0,
  pointArray:[10,20,30,40,50,60,100]
};

const AppSlice = createSlice({
  name: "App`",
  initialState,
  reducers: {
    claimPoints(state, action) {
      state.Points = state.Points +state.dailyClaim
      state.dailyClaim >= 100 ? state.dailyClaim = 0 :null
    },
    progressClaim(state, action) {
        
      state.dailyClaim =
        state.dailyClaim < 60
          ? state.dailyClaim + 10
          : state.dailyClaim >= 60
          ?  state.dailyClaim + 40 
          : state.dailyClaim >= 100
          ? 0 : null
          
    },
    setClaimed(state,action){
        state.Claimed = action.payload
    }
  },
});

export const { progressClaim, claimPoints,setClaimed } = AppSlice.actions;
export default AppSlice.reducer;
