document.getElementById('btn').addEventListener('click',random);
function random(){
    var randomNum = Math.floor(Math.random() * 16777215);
    var hexNum = '#' + randomNum.toString(16);
    document.body.style.backgroundColor = hexNum;
    document.getElementById('hex').innerHTML = hexNum;
}

random();