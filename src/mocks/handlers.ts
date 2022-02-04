import { rest } from 'msw';

export const handlers = [
    rest.get('/api/v1/devices', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                devices: [
                    {
                        type: 'bulb',
                        id: 'bulb',
                        name: 'Bulb 1',
                        connectionState: 'connected',
                    },
                    {
                        type: 'outlet',
                        id: 'outlet',
                        name: 'Outlet 1',
                        connectionState: 'disconnected',
                    },
                    {
                        type: 'temperatureSensor',
                        id: 'temperatureSensor',
                        name: 'Sensor 1',
                        connectionState: 'poorConnection',
                    },
                ],
            }),
        );
    }),
    rest.get('/api/v1/devices/bulb', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                type: 'bulb',
                id: 'bulb',
                name: 'Bulb 1',
                connectionState: 'connected',
                isTurnedOn: true,
                brightness: 88,
                color: '#ffffff',
            }),
        );
    }),
    rest.get('/api/v1/devices/outlet', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                type: 'outlet',
                id: 'outlet',
                name: 'Outlet 1',
                connectionState: 'disconnected',
                isTurnedOn: false,
                powerConsumption: 0,
            }),
        );
    }),
    rest.get('/api/v1/devices/temperatureSensor', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                type: 'temperatureSensor',
                id: 'temperatureSensor',
                name: 'Temperature Sensor 1',
                connectionState: 'poorConnection',
                temperature: 22,
            }),
        );
    }),
];
