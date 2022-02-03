export interface ISmartDevice {
    type: string; // 'bulb', 'outlet' or 'temperatureSensor';
    id: string;
    name: string;
    connectionState: string; // 'connected', 'disconnected' or 'poorConnection'
}

export interface ISmartBulb extends ISmartDevice {
    type: 'bulb';
    isTurnedOn: boolean;
    brightness: number;
    color: string;
}

export interface ISmartOutlet extends ISmartDevice {
    type: 'outlet';
    isTurnedOn: boolean;
    powerConsumption: number;
}

export interface ISmartTemperatureSensor extends ISmartDevice {
    type: 'temperatureSensor';
    temperature: number;
}
