let powers= [0] //Массив для сохранения мощностей включенных приборов

// Родительская функция
function ElectricalAppliances (name, color, power) {
    this.type = "Электроприбор",
    this.name = name,
    this.color = color,
    this.power = power
    
}

// метод включения/выключения прибора
ElectricalAppliances.prototype.powerCalculation = function (status) {
    if (status === "on") {
        powerOn = this.power
        powers.push(powerOn);
        console.log(`${this.color} ${this.name} - ${this.type}  включен и потребляет ${powerOn} Вт.`)

    } else {
        console.log(`${this.color} ${this.name} - ${this.type} выключен.`)
    }
}

// функция-конструктор для пылесосов
function CleaningElectricalAppliances (name, dustCapacity, suctionPower) {
    this.view = "Уборка",
    this.name = name,
    this.dustCapacity = dustCapacity, // объем пылесборника
    this.suctionPower = suctionPower   
}

// метод вывода характеристик пылесосов
ElectricalAppliances.prototype.characteristicsOutputCleaning = function () {
    console.log(`Основные характеристики: 
                Тип прибора: ${this.type}
                Название: ${this.name}
                Цвет: ${this.color}
                Мощность: ${this.power}
                Характеристики ${this.name}:
                Мощность всасывания: ${this.suctionPower}
                Емкость: ${this.dustCapacity}`)
}

// функция-конструктор для микроволновых печей
function CookingElectricalAppliances (name, backlight, palletDiameter, internalVolume) {
    this.view = "Готовка",
    this.name = name,
    this.backlight = backlight,
    this.palletDiameter = palletDiameter,
    this.internalVolume = internalVolume
}

// метод вывода характеристик микроволновых печей
ElectricalAppliances.prototype.characteristicsOutputCleaningCooking = function () {
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

CleaningElectricalAppliances.prototype = new ElectricalAppliances("пылесос", "Синий", 1600); //Делегирующая связь
CookingElectricalAppliances.prototype = new ElectricalAppliances("микроволновая печь", "Черная", 1150); //Делегирующая связь


const hoover = new CleaningElectricalAppliances("пылесос", 1.5, 200);
const microwave = new CookingElectricalAppliances("микроволновая печь", "есть", 24.5, 20);

hoover.characteristicsOutputCleaning()
hoover.powerCalculation(prompt("Введите \"on\" если пылесос включен")) //назначение статуса прибора

microwave.characteristicsOutputCleaningCooking()
microwave.powerCalculation(prompt("Введите \"on\" если микроволновая печь включена")) //назначение статуса прибора


let total = powers.reduce(function(a, b) {
    return a + b;
  });

console.log(`Суммарная мощность включенных приборов = ${total} Вт`)