// Car Booking Data
let carBooking = [
    [1, 'Toyota', 'Corolla', 'Sedan', 50, 10],
    [2, 'Honda', 'Civic', 'Sedan', 55, 8],
    [3, 'Ford', 'Mustang', 'Sports Car', 80, 5],
    [4, 'Jeep', 'Wrangler', 'SUV', 70, 7],
    [5, 'Nissan', 'Altima', 'Sedan', 45, 12]
];
//Task 1
const carBrands = carBooking.map(car => car[1]);
console.log("Car Brands:", carBrands.join(", "));

// Task 2
const totalAvailableCars = carBooking.reduce((total, car) => total + car[5], 0);
console.log("Total number of cars available:", totalAvailableCars);

//Task 3

