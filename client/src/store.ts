import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homePageReducer from './pages/Home/slice';
import reduxLogger from 'redux-logger';

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
    reducer: {
        homePage: homePageReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStore,
    unknown,
    Action<string>
>;