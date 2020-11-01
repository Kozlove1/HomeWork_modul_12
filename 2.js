let str = 'Пупырышек';
let obj = {
    1:'Пупырышек',
    3:'Петличка'
};

const check = (str, obj) => {
    for (const [key, value] of Object.entries(obj)){
        if (value === str){
            return true
        } else {
            return false
        }
    }
}

console.log (check(str, obj))

// Не совсем верно поняли задание, функция должна определять, есть ли в объекте свойство с таким именем, т.е. нужно искать среди ключей, не среди значений. Правильный вариант решения может быть например такой:

function isPropinObj(prop, obj) {
	return prop in obj;
}	