var car={
    name:'baleno',
    modal:'hatch black',
    manufacturer:'maruti',
    price:'10 lakh'
}

//w.a.p to print modal and manufactrer name of the given car

console.log(car.modal);
console.log(car.manufacturer);

//w.a.p to  vriantkey to the car object with value has 'manual'

car['varient']=['manual']
console.log(car);

//w.a.p to add a new value automatic to the key variant

car.varient.push('automatic')
console.log(car);

//w.a.p to add a new key as colour with values red blue and white

car['colour']=['red','blue','white']
console.log(car);