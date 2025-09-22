import { configureStore } from '@reduxjs/toolkit';
import guitarsReducer from '../pages/Guitars/guitarsSlice';

export const store = configureStore({
  reducer: {
    guitars: guitarsReducer,
  },
});

// Типы для useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
