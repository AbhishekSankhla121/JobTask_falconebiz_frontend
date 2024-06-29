import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "./reducer";
const store = configureStore({
    reducer: {
        user: registerReducer
    }
});


export default store;
export const server = "http://localhost:5000/api/v1";