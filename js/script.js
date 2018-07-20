let dengi, ya, b, cenaYa,cenaB;
dengi = Number(prompt('сколько у вас с собой есть денег?'));
ya = Number(prompt('сколько вы купили яблок?'));
b = Number(prompt('сколько вы купили батонов хлеба?'));
cenaYa = ya*Number(prompt('сколько стоит одно яблоко?'));
cenaB = b*Number(prompt('сколько стоит один батон хлеба?'));
if ((cenaYa+cenaB)<dengi){
  console.log('true');
} else {
  console.log('false');
}