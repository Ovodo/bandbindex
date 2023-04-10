import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./reducers/AppReducer";

// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const allReducers = combineReducers({
  App: AppReducer   ,
  
});

// const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: allReducers,
  middleware: [thunk],
});
// export const persistor = persistStore(store);

// console.log(store.getState());
// console.log(names)
