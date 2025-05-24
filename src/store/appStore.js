import { configureStore } from "@reduxjs/toolkit";
import mainContextReducer from './mainContextSlice'

const appStore=configureStore({
    reducer:{
        mainContext:mainContextReducer
    }
})
export default appStore