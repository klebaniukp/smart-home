export const getBulbService = async () => {
    const response = await fetch('http://localhost:3000/api/v1/devices/bulb');
    return response.json();
};
