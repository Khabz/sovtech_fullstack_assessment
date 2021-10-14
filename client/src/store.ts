import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import homePageReducer from './pages/Home/slice';

export const store = configureStore({
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