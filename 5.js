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
        this.weight = weight;
        this.typeUse = 'Вычислительный прибор'
        this.getWeight = function () {
            console.log('Вес ноутбука составляет ' + this.weight + ' кг')
        }
    }

}

class LightUse extends TableTechnology {
    constructor(name, weight) {
        super();
        this.name = name
        this.weight = weight;
        this.typeUse = 'Осветительный прибор'
        this.getWeight = function () {
            console.log('Вес лампы составляет ' + this.weight + ' г')
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

// Здесь сохранились те же проблемы, что и в предыдущем задании, но есть и пару других: в констуркторах ComputerUse и LightUse в качестве аргумента передаётся свойство weight, но оно не записывается в объект. В методах getWeight при выводе значения используется не свойство объекта weight, а аргумент weight, переданный в конструктор. Это не корректное поведение и в перспективе может привести к ошибкам.