/* Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

function searchProperty (str, obj) {
    return str in obj;
}

const person = {
    city: "Kursk"
}

const student = Object.create(person);

student.name = "Iwan";
student.surname = "Iwanow";
student.age = 24

const string = "iwe"

console.log(`Свойство ${string} есть в выбранном объекте? ${searchProperty(string, student)}!`);
