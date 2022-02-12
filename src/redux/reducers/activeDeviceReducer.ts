import {
    ISmartBulb,
    ISmartOutlet,
    ISmartTemperatureSensor,
} from '../../interfaces';

export const activeDeviceReducer = (
    state: ISmartBulb | ISmartOutlet | ISmartTemperatureSensor,
    action: {
        type: string;
        payload: ISmartBulb | ISmartOutlet | ISmartTemperatureSensor;
    },
) => {
    try {
        switch (action.type) {
            case 'SET_ACTIVE_DEVICE':
                return action.payload;
            default:
                if (state) return state;
                return {};
        }
    } catch (error) {
        console.log(error);
    }
};
