// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log("это ноль");
    } else if ((i % 2) === 0) {
        console.log("четное число", i);
    } else {
        console.log("нечетное число", i);
    }

}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let arrayRandom = [];
for(let i = 0; i < 6; i++) {
    arrayRandom.push(Math.trunc(Math.random() * 10));
}
console.log(arrayRandom);

let sum = 0;
let min = arrayRandom[0];

for(let i = 0; i < arrayRandom.length; i++) {
    sum += arrayRandom[i];
    if (arrayRandom[i] < min) {
        min = arrayRandom[i];
    }
    if (arrayRandom[i] === 3) {
        console.log("есть число 3");
    }
}
console.log("Сумма эллеметов:", sum, "Минимальное число:", min);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for(let i = 1; i < 21; i++) {
    let result = 'x';
    for(let j = 1; j < i; j++) {
        result += 'x';
    }
    console.log(i, result);
}
