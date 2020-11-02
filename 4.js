function TableTechnology() {
    this.use = 'Для учебы и работы'
    this.vt = 100; // Любое значение по умолчанию
    this.status = false; // При создании прибор по умолчанию выключен
}

TableTechnology.prototype.energy = function () {
    if (this.status) {
        console.log (`Расход электро энергии ${this.vt}Вт`)
    } else {
        console.log ('Прибор отключен от сети')
    }
}

TableTechnology.prototype.turnOn = function() {
    this.status = true;
}

TableTechnology.prototype.turnOff = function() {
    this.status = false;
}

function ComputerUse(name, weight, vt) {
    this.name = name
    this.typeUse = 'Вычислительный прибор'
    this.vt = vt;
    this.getWeight = function (){
        console.log('Вес ноутбука составляет ' + weight + ' кг')
    }
}

function LightUse(name, weight, vt) {
    this.name = name
    this.typeUse = 'Осветительный прибор'
    this.vt = vt;
    this.getWeight = function () {
        console.log('Вес лампы составляет ' + weight + ' г')
    }
}

ComputerUse.prototype = new TableTechnology()
LightUse.prototype = new TableTechnology()

const laptop = new ComputerUse('ноутбук', 1, 4800);
const lamp = new LightUse('светильник', 500, 40);

console.log(laptop)
laptop.getWeight()
laptop.turnOn();
laptop.energy()


console.log(lamp)
lamp.getWeight()
lamp.energy()

// Почти верно, но у меня есть вопросы к методу TableTechnology.prototype.energy. Если я правильно поняла, то tumbler - это флаг состояния вкл.\выкл, а vt - это количество потребляемой энергии. В таком случае функция задумана не совсем логично. Эти два параметра являются свойствами, относящимися к объекту, нужно брать их из текущего объекта, а не передавать в функцию в качестве аргумента. Тем более, что задача этой функции - не переписать существующие значения в объекте, а вывести определенную информацию об объекте, основываясь на его текущем состоянии. Текущее состояние должно всегда храниться в объекте, не где-то вне его.
// Кроме того, по заданию нужно было определить для родительского прототипа методы, отвечающие за включение\выключение объекта. У вас такие методы не определены.
// Выше исправила перечисленные недочеты