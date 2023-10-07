function analyzeCarMileage(cars) {
    

    const mileages = cars.map((car) => car.mileage )
    
    const totalMileage = cars.reduce((total, car) => total += car.mileage, 0);
    const averageMileage = totalMileage / cars.length

    const highestMileageCar = cars.reduce((itrCar,car) => itrCar.mileage < car.mileage ? car : itrCar, cars[0])
    const lowestMileageCar = cars.reduce((itrCar,car) => itrCar.mileage > car.mileage ? car : itrCar, cars[0])
    
    return {totalMileage, averageMileage, highestMileageCar, lowestMileageCar}
}

module.exports = analyzeCarMileage;
