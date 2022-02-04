export interface ISmartDevice {
    type: 'bulb' | 'outlet' | 'temperatureSensor';
    id: string;
    name: string;
    connectionState: 'connected' | 'poorConnection' | 'disconnected';
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
