import { combineReducers } from '@reduxjs/toolkit';
import { activeDeviceReducer as activeDevice } from './activeDeviceReducer';
import { deviceReducer as devices } from './devicesReducer';

export const reducers = combineReducers({ activeDevice, devices });
