document.getElementById('btn').addEventListener('click',random);
function random(){
    var randomNum = Math.floor(Math.random() * 16777215);
    var hexNum = '#' + randomNum.toString(16);
    if(hexNum.length == '7'){
        document.body.style.backgroundColor = hexNum;
        document.getElementById('hex').innerHTML = hexNum;
    }
    else{
        document.body.style.backgroundColor = hexNum + '0';
        document.getElementById('hex').innerHTML = hexNum + '0';
    }
}

random();
