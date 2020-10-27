class TableTechnology {
    constructor() {
        this.use = 'Для учебы и работы'
    }
energy (tumbler, vt) {
        if (tumbler === 1) {
            console.log(`Расход электро энергии ${vt}Вт`)
        } else if (tumbler === 0) {
            console.log('Отключен от сети')
        }
    }
}

class ComputerUse extends TableTechnology {
    constructor(name, weight) {
        super();
        this.name = name
        this.typeUse = 'Вычислительный прибор'
        this.getWeight = function () {
            console.log('Вес ноутбука составляет ' + weight + ' кг')
        }
    }

}

class LightUse extends TableTechnology {
    constructor(name, weight) {
        super();
        this.name = name
        this.typeUse = 'Осветительный прибор'
        this.getWeight = function () {
            console.log('Вес лампы составляет ' + weight + ' г')
        }
    }
}

const laptop = new ComputerUse('ноутбук', 1);
const lamp = new LightUse('светильник', 500);

console.log(laptop)
laptop.getWeight()
laptop.energy(1, 4800)


console.log(lamp)
lamp.getWeight()
lamp.energy(0, 40)