import { combineReducers } from '@reduxjs/toolkit';
import { activeDeviceReducer as activeDevice } from './activeDeviceReducer';

export const reducers = combineReducers({ activeDevice });
