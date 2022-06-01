import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from "redux"; 
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from './cartSlice'

const reducers = combineReducers({
    cart:cartReducer,
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
})


export default store

