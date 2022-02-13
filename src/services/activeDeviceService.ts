export const activeDeviceService = (
    id: 'bulb' | 'outlet' | 'temperatureSensor',
) => {
    //this service would connect to websocket and listen to events -> return it
    //or just listen to ws in body of desired components

    const seed = getRandomInt(0, 100);

    switch (id) {
        case 'bulb':
            if (seed > 50)
                return {
                    type: 'bulb',
                    id: id,
                    name: 'Bulb 1',
                    connectionState: 'connected',
                    isTurnedOn: true,
                    brightness: getRandomInt(0, 100),
                    color: '#ffffff',
                };
            else
                return {
                    type: 'bulb',
                    id: id,
                    name: 'Bulb 1',
                    connectionState: 'poorConnection',
                    isTurnedOn: false,
                    brightness: getRandomInt(0, 100),
                    color: '#ffffff',
                };
        case 'outlet':
            if (seed > 50)
                return {
                    type: 'outlet',
                    id: id,
                    name: 'Outlet 1',
                    connectionState: 'disconnected',
                    isTurnedOn: false,
                    powerConsumption: getRandomInt(10, 245),
                };
            else
                return {
                    type: 'outlet',
                    id: id,
                    name: 'Outlet 1',
                    connectionState: 'connected',
                    isTurnedOn: true,
                    powerConsumption: getRandomInt(10, 245),
                };
        case 'temperatureSensor':
            if (seed > 50)
                return {
                    type: 'temperatureSensor',
                    id: id,
                    name: 'Temperature Sensor 1',
                    connectionState: 'connected',
                    temperature: getRandomInt(0, 43),
                };
            else
                return {
                    type: 'temperatureSensor',
                    id: id,
                    name: 'Temperature Sensor 1',
                    connectionState: 'poorConnection',
                    temperature: getRandomInt(0, 43),
                };
    }
};

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
