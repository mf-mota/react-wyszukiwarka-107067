export const carFilter = (cars, word) => {

    let filterdCars = [];
    cars.forEach(car => {
        if (car.model.toLowerCase().includes(word.toLowerCase()) || car.brand.toLowerCase().includes(word.toLowerCase())
        || checkEngines(car.engines, word)) {
            filterdCars.push(car);
        }
    });

    return filterdCars;
}

const checkEngines = (engines, word) => {
    let result = false;
    engines.forEach(engine => {
        if(engine.toLowerCase().includes(word.toLowerCase())) {
            result = true;
        }
    });

    return result;
}