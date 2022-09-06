import { configureStore } from '@reduxjs/toolkit';
import caloriesSlice from '../features/caloriesSlice';

export const store = configureStore({
  reducer: {
    calories: caloriesSlice,
  },
});