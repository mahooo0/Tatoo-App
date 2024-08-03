// src/store/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from '../Store/Slices/adminslice'; // Adjust the import path

const rootReducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
