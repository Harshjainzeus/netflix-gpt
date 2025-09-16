import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import appReducer from './appSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        app: appReducer
    }
})

export default appStore