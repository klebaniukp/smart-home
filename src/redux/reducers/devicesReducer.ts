import { ISmartDevice } from '../../interfaces';

export const deviceReducer = (
    state: ISmartDevice[],
    action: { type: string; payload: ISmartDevice[] },
) => {
    try {
        switch (action.type) {
            case 'SET_DEVICES':
                return action.payload;
            default:
                if (state) return state;
                return [];
        }
    } catch (error) {
        console.log(error);
    }
};
