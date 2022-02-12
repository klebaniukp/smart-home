import {
    ISmartBulb,
    ISmartOutlet,
    ISmartTemperatureSensor,
} from '../../interfaces';

export const activeDevice =
    (device: ISmartBulb | ISmartOutlet | ISmartTemperatureSensor) =>
    (
        dispatch: (arg0: {
            type: string;
            payload: ISmartBulb | ISmartOutlet | ISmartTemperatureSensor;
        }) => void,
    ) => {
        try {
            dispatch({
                type: 'SET_ACTIVE_DEVICE',
                payload: device,
            });
        } catch (error) {
            console.log(error);
        }
    };
