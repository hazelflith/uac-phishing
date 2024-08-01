const fs = require('fs');
const path = require('path');
var $ = require('jquery');
require('hideshowpassword');


$('#eye').mousedown(functShowPassword)// Reveal
$('#eye').mouseup(functHidePassword)// Reveal

document.getElementById("submit").addEventListener("click", createTxtFile);
document.getElementById("close").addEventListener("click", closeApp);
document.getElementById("no").addEventListener("click", closeApp);

function functShowPassword() {
    $('#password').showPassword()
}
function functHidePassword() {
    $('#password').hidePassword()
}
function createTxtFile() {
    const password = document.getElementById('password').value;
    
    const content = `${password}`;
    const filePath = path.join("D:/Development/the-thing/", 'the_thing.txt');

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('An error occurred while creating the file:', err);
        } else {
            console.log('File created successfully at', filePath);
            window.close()
        }
    });
}

function closeApp() {
    window.close();
}