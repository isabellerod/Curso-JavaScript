const sayHello = name => console.log('Hi ' + name);


const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Values');
const sayHello4 = name => 'Hi ' + name;

sayHello('Isabelle');
sayHello2('Isabelle', 'Hello');
sayHello3();
console.log(sayHello4('Isabelle'));

const sayHello5 = (name, phrase = 'Default') => console.log(phrase + '' + name);
sayHello5('Isabelle');
sayHello5('Isabelle', 'oie');

function checkInput (cb, ...arg) {
  let emptyText = false;
  for(const text of arg) {
    if (!text) {
      emptyText = true;
      break;
    }
  }
  if (!emptyText) {
    cb();
  }
}

checkInput(() => {
  console.log('All of the strings are not empty!');
},
'Hello', '12', 'Casa', '');