import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { ISmartDevice } from './interfaces/index';
import { RenderDevices } from './components/organisms/Devices/RenderDevices';
import { ActiveDevice } from './components/organisms/Devices/ActiveDevice';

interface IPosition {
    x: number;
    y: number;
}

function App() {
    const dispatch = useDispatch();

    const devices: ISmartDevice[] = useSelector(
        (state: RootState) => state.devices,
    );

    const [position, setPosition] = useState<IPosition>();

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/devices')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'SET_DEVICES', payload: data.devices });
            });
        setPosition(defaultPosition());
    }, []);

    const defaultPosition = () => {
        const positionLS = localStorage.getItem('position');
        console.log([position, positionLS]);
        if (positionLS !== null) return JSON.parse(positionLS);
        else return { x: 0, y: 0 };
    };

    return (
        <>
            {devices.length > 0 ? (
                <RenderDevices />
            ) : (
                <div>No devices found</div>
            )}
            {position ? <ActiveDevice defaultPosition={position} /> : <></>}
        </>
    );
}

export default App;
