function TableTechnology() {
    this.use = 'Для учебы и работы'
}

TableTechnology.prototype.energy = function (tumbler, vt) {
    if (tumbler === 1) {
        console.log (`Расход электро энергии ${vt}Вт`)
    } else if (tumbler === 0) {
        console.log ('Отключен от сети')
    }
}
function ComputerUse(name, weight) {
    this.name = name
    this.typeUse = 'Вычислительный прибор'
    this.getWeight = function (){
        console.log('Вес ноутбука составляет ' + weight + ' кг')
    }
}

function LightUse(name, weight) {
    this.name = name
    this.typeUse = 'Осветительный прибор'
    this.getWeight = function () {
        console.log('Вес лампы составляет ' + weight + ' г')
    }
}

ComputerUse.prototype = new TableTechnology()
LightUse.prototype = new TableTechnology()

const laptop = new ComputerUse('ноутбук', 1)
const lamp = new LightUse('светильник', 500)

console.log(laptop)
laptop.getWeight()
laptop.energy(1, 4800)


console.log(lamp)
lamp.getWeight()
lamp.energy(0, 40)