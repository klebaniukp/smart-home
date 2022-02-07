import { ISmartDevice } from '../../interfaces';

export const devices =
    (device: ISmartDevice[]) =>
    (dispatch: (arg0: { type: string; payload: ISmartDevice[] }) => void) => {
        try {
            dispatch({
                type: 'SET_DEVICES',
                payload: device,
            });
        } catch (error) {
            console.log(error);
        }
    };
