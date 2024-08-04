import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducers/userSlice.jsx'



const Store = configureStore({
    reducer: {   
        user : userSlice,
    },
});

export default Store;