function sum_of_series(from, to) {
    if (from > to) return 0;
    return ((from + to) * (to - from + 1)) / 2;
}

function sum_of_series_for(from, to) {
    let result = 0;
    for (let i = from; i < to + 1; i++) {
        result += i;
    }
    return result;
}

function sum_of_series_while(from, to) {
    let result = 0;
    while (from < to + 1) {
        result += from;
        from += 1;
    }
    return result;
}

function rd(min, max) {
    return Math.random() * (max - min) + min;
}

/*
1. Знайти суму ряду послідовних чисел від lim1 до lim2. Наприклад, якщо lim1=5, lim2=8,
то ця сума 5+6+7+8.
2. Завдання розв’язати через цикл for, цикл while, створення функції.
3. Реалізувати стрілкову (стрелочную) функцію добутку двох чисел. Реализовать
стрелочную функцию произведения двух чисел.
*/

a = 5;
b = 11;

console.log(`1. sum of interval [${a};${b}]: ${sum_of_series(a, b)}`);
console.log(
    `2. sum of interval using for [${a};${b}]: ${sum_of_series_for(a, b)}`
);
console.log(
    `2. sum of interval using while [${a};${b}]: ${sum_of_series_while(a, b)}`
);

sum_of_two_nums = (a, b) => {
    return a + b;
};
product_of_two_nums = (a, b) => {
    return a * b;
};
console.log(`3. sum of numbers ${a} and ${b} is`, sum_of_two_nums(a, b));
console.log(
    `3. product of numbers ${a} and ${b} is`,
    product_of_two_nums(a, b)
);

/*
Масив одновимірний
3.1 Створити числовий масив та проініціалізувати його.
3.2. Вивести розмір масива
3.3. Вивести елементи з парними індексами
3.4. Вивести тільки парні елементи
3.5. Вивести індекси нульових елементів (елемент дорівнює нулю)
3.6. Обчислити кількість нульових елементів
*/
let min = 0;
let max = 10;
let arr_length = 50;
let arr = Array.from({ length: arr_length }, () => parseInt(rd(min, max)));
console.log(`3. Array[${arr_length}]: `, ...arr);

let even_indices = [];
let even_elements = [];
let zero_elements_indices = [];
let zero_elements_sum = 0;
for (const [i, e] of arr.entries()) {
    if (i % 2 == 0) even_indices.push(e);
    if (e % 2 == 0) even_elements.push(e);
    if (e == 0) {
        zero_elements_indices.push(i);
        zero_elements_sum += 1;
    }
}
console.log(`3. even_indices: `, ...even_indices);
console.log(`3. even_elements: `, ...even_elements);
console.log(`3. zero_elements_indices: `, ...zero_elements_indices);
console.log(`3. zero_elements_sum: `, zero_elements_sum);

/*
4. Створити об’єкт Машина та визначити для нього властивості.
5. Створити функції-конструктори: Книжка (автор, назва, рік видання, видавництво)
5. Создать функции-конструкторы: Книга (автор, название, год издания, издательство)
Електронна версія книжки (автор, назва, рік видавництва, видавництво, формат,
електронний номер).
5.1. Переробити створення функцій без дублювання інформації, реалізувавши
прототипне наслідування.
*/

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "blue",
    fuel_type: "petrol",
    engine_size: 1.8,
    is_running: false,

    // Метод для запуска двигателя
    start: function () {
        this.is_running = true;
        console.log("Engine running");
    },

    // Метод для остановки двигателя
    stop: function () {
        this.is_running = false;
        console.log("Engine stopped");
    },
};

console.log("4. car condition:", car.is_running);
car.start();
console.log("4. car condition:", car.is_running);
car.stop();
console.log("4. car condition:", car.is_running);

function Book(author, title, year, publisher) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.publisher = publisher;
}

Book.prototype.toString = function () {
    return `Book: ${this.title} (Author: ${this.author}, Year: ${this.year})`;
};

function EBook(author, title, year, publisher, format, electronic_number) {
    Book.call(this, author, title, year, publisher);
    this.format = format;
    this.electronic_number = electronic_number;
}

EBook.prototype.toString = function () {
    return `Book: ${this.title} (Author: ${this.author}, Year: ${this.year}, Format: ${this.format}, Electronic number: ${this.electronic_number})`;
};

let Electro_book = new EBook(
    "Ivan Ivanov",
    "Best book ever existed",
    "2013",
    "worst publisher",
    "fb2",
    "1313",
    "author"
);

console.log("5. EBook and book ", Electro_book.toString());
