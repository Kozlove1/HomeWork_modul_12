const tip = {
    porshe:'red'
}

const car = Object.create(tip);
    car.lada = 'black';
    car.polo = 'white';


const obj = (car) => {
    for (const [key, value] of Object.entries(car)) {
        console.log(`${key}: ${value}`);
    }
}
obj(car)


/*const obj = (car) => {
    for (let key in car) {
        if (car.hasOwnProperty(key)){
            console.log(key, car[key])
        }
    }
}
obj(car)*/