/* Написать функцию, которая создает пустой объект, но без прототипа. */

function createEmptyObject () {
    emptyObj = Object.create(null);
    return emptyObj;
}

createEmptyObject(); 
console.log(emptyObj);