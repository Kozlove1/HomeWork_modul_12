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