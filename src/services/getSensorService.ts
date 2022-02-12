export const getSensorService = async () => {
    const response = await fetch('http://localhost:3000/api/v1/devices/temperatureSensor');
    return response.json();
};
