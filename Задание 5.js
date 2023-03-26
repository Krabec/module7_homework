let powers= [0] //Массив для сохранения мощностей включенных приборов

class ElectricalAppliances {
    constructor(name, color, power) {
        this.type = "Электроприбор",
        this.name = name,
        this.color = color,
        this.power = power 
    }
    powerCalculation(status) {
        if (status === "on") {
            let powerOn = this.power
            powers.push(powerOn);
            console.log(`${this.color} ${this.name} - ${this.type}  включен и потребляет ${powerOn} Вт.`)
    
        } else {
            console.log(`${this.color} ${this.name} - ${this.type} выключен.`)
        }
    }
}

class CleaningElectricalAppliances extends ElectricalAppliances {
    constructor(dustCapacity, suctionPower,name, color, power) {
        super(name, color, power)
        this.view = "Уборка",
        this.name = name,
        this.dustCapacity = dustCapacity, // объем пылесборника
        this.suctionPower = suctionPower  
    }
    characteristicsOutputCleaning() {
        console.log(`Основные характеристики: 
                Тип прибора: ${this.type}
                Название: ${this.name}
                Цвет: ${this.color}
                Мощность: ${this.power}
                Характеристики ${this.name}:
                Мощность всасывания: ${this.suctionPower}
                Емкость: ${this.dustCapacity}`)
    }
}

class CookingElectricalAppliances extends ElectricalAppliances {
    constructor(backlight, palletDiameter, internalVolume, name, color, power) {
        super(name, color, power)
        this.view = "Готовка",
        this.name = name,
        this.backlight = backlight,
        this.palletDiameter = palletDiameter,
        this.internalVolume = internalVolume
    }
    characteristicsOutputCleaningCooking() {
        console.log(`Основные характеристики: 
                Тип прибора: ${this.type}
                Название: ${this.name}
                Цвет: ${this.color}
                Мощность: ${this.power}
                Характеристики ${this.name}:
                Подцветка: ${this.backlight}
                Диаметр поддона: ${this.palletDiameter}
                Внутрений объем: ${this.internalVolume}`)
    }
}

const hoover = new CleaningElectricalAppliances(1.5, 200, "пылесос", "Синий", 1600);
const microwave = new CookingElectricalAppliances("есть", 24.5, 20, "микроволновая печь", "Черная", 1150);

hoover.characteristicsOutputCleaning()
hoover.powerCalculation(prompt("Введите \"on\" если пылесос включен")) //назначение статуса прибора

microwave.characteristicsOutputCleaningCooking()
microwave.powerCalculation(prompt("Введите \"on\" если микроволновая печь включена")) //назначение статуса прибора


let total = powers.reduce(function(a, b) {
    return a + b;
  });

console.log(`Суммарная мощность включенных приборов = ${total} Вт`)