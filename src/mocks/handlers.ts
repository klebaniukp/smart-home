import { rest } from 'msw';

export const handlers = [
    rest.get('/api/v1/devices', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                devices: [
                    {
                        type: 'bulb',
                        id: 'bulb-1',
                        name: 'Bulb 1',
                        connectionState: 'connected',
                    },
                    {
                        type: 'temperatureSensor',
                        id: 'temperatureSensor-1',
                        name: 'Temperature Sensor 1',
                        connectionState: 'poorConnection',
                    },
                    {
                        type: 'outlet',
                        id: 'outlet-1',
                        name: 'Outlet 1',
                        connectionState: 'disconnected',
                    },
                ],
            }),
        );
    }),
];
