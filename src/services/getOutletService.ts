export const getOutletService = async () => {
    const response = await fetch('http://localhost:3000/api/v1/devices/outlet');
    return response.json();
};
