/* Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

function displayValues1 (obj) {
    console.log(`Ключи и значения собственных свойств:`)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`) //выведет только ключи и значения собственных свойств
        }
    }
}

function displayValues2 (obj) {
    console.log(`Все ключи:`)
    for (let key in obj) {
        console.log(key) //выводит в консоль все ключи
    }
    console.log(`Значения только собственных свойств:`)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(obj[key]) //выводит в консоль значения только собственных свойств
        }
    }
}

const person = {
    city: "Kursk"
}

const student = Object.create(person);

student.name = "Iwan";
student.surname = "Iwanow";
student.age = 24

displayValues1(student);
displayValues2(student);