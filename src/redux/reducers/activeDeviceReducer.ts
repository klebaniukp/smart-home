import { ISmartDevice } from '../../interfaces';

export const activeDeviceReducer = (
    state: ISmartDevice,
    action: { type: string; payload: ISmartDevice },
) => {
    try {
        switch (action.type) {
            case 'SET_ACTIVE_DEVICE':
                return action.payload;
            default:
                if (state) return state;
                return {
                    type: '',
                    id: '',
                    name: '',
                    connectionState: '',
                };
        }
    } catch (error) {
        console.log(error);
    }
};
