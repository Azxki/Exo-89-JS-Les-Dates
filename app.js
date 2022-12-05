let myDate = Date.now()

let aujourdhui = new Date()
let myDate2 = aujourdhui.toLocaleDateString();
let myDate3 = aujourdhui.toLocaleTimeString()


document.getElementById('timestamp').innerHTML = myDate;
document.getElementById('localDate').innerHTML = myDate2;
document.getElementById('localTime').innerHTML = myDate3;


let auj_1 = new Date();
let auj_2 = new Date();

auj_1.setHours(aujourdhui.getHours() + 6)
auj_2.setDate(aujourdhui.getDate() + 2);

document.getElementById('date_auj').innerHTML = "Nous sommes le " + auj_1 + " et il est " + auj_2;


