const task3Element = document.getElementById('task-3');

function showAlert(){
    alert('its working');
}

function user(name) {
    alert('hi' + name);
}

function threeParameters(string1, string2, string3) {
    const combinedText = string1 + string2 + string3;
    return combinedText;
}

showAlert();
user('isabelle');

task3Element.addEventListener('click', user);

const combinedString = threeParameters('hi', 'there', '!');
alert (combinedString);