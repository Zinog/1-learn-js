//Escape-последовательности в строках

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

console.log(myStr)

/* Техническое задание
Мяу! Длительность прогулки зависит от нескольких условий.
Если идёт дождь, гулять я не хожу. В этом случае длительность прогулки равняется 0. А вот если дождя нет, всё зависит от температуры на улице:
Во-первых, если температура от 10°C (включительно) до 15°C (не включая это значение), я гуляю 30 минут.
Во-вторых, если температура от 15°C (включительно) до 25°C (не включая значение), я гуляю 40 минут.
В-третьих, при температуре от 25°C (включительно) до 35°C (включительно), я гуляю 20 минут.
В остальных случаях я никуда не выхожу: либо очень холодно, либо очень жарко.
Результат программы – время прогулки. Его необходимо записать в переменную minutes.
*/
let temperature = 40;
let isRaining = false;
let minutes = 0;

if (isRaining) {
  console.log(minutes = 0);
}
if (!isRaining && temperature >= 10 && temperature < 15) {
    console.log(minutes = 30);
  }
if (!isRaining && temperature >= 15 && temperature < 25) {
    console.log(minutes = 40);
  }
if (!isRaining && temperature >= 25 && temperature <= 35) {
    console.log(minutes = 20);
  }
  if (!isRaining && temperature < 10 ) {
     console.log(minutes = 0); 
  }
    if (!isRaining && temperature > 36) {
     console.log(minutes = 0); 
  }