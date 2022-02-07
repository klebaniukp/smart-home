export const activeDeviceService = (
    id: 'bulb' | 'outlet' | 'temperatureSensor',
) => {
    //this service would connect to websocket and listen to events -> return it
    //or just listen to ws in body of desired component

    const seed = getRandomIntInclusive(0, 100);

    switch (id) {
        case 'bulb':
            if (seed > 50)
                return {
                    type: 'bulb',
                    connectionState: 'connected',
                    isTurnedOn: true,
                    brightness: 88,
                    color: '#ffffff',
                };
            else
                return {
                    type: 'bulb',
                    connectionState: 'poorConnection',
                    isTurnedOn: false,
                    brightness: 43,
                    color: '#ffffff',
                };
        case 'outlet':
            if (seed > 50)
                return {
                    type: 'outlet',
                    connectionState: 'disconnected',
                    isTurnedOn: false,
                    powerConsumption: 0,
                };
            else
                return {
                    type: 'outlet',
                    connectionState: 'connected',
                    isTurnedOn: true,
                    powerConsumption: 65,
                };
        case 'temperatureSensor':
            if (seed > 50)
                return {
                    type: 'temperatureSensor',
                    connectionState: 'connected',
                    temperature: 20,
                };
            else
                return {
                    type: 'temperatureSensor',
                    connectionState: 'poorConnection',
                    temperature: 25,
                };
    }
};

const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
