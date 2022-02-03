import { ISmartDevice } from '../../interfaces';

export const activeDevice =
    (device: ISmartDevice) =>
    (dispatch: (arg0: { type: string; payload: ISmartDevice }) => void) => {
        try {
            dispatch({
                type: 'SET_IS_SHOW_PASSWORD',
                payload: device,
            });
        } catch (error) {
            console.log(error);
        }
    };
