import { ISmartDevice } from '../../interfaces';

export const activeDevice =
    (device: ISmartDevice) =>
    (dispatch: (arg0: { type: string; payload: ISmartDevice }) => void) => {
        try {
            dispatch({
                type: 'SET_ACTIVE_DEVICE',
                payload: device,
            });
        } catch (error) {
            console.log(error);
        }
    };
