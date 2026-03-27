// console.log("\n Деструктуризация массивов");
// const colors = ["red", "green", "blue"];
// //старый способ без деструктуризации 
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// //новый способ с деструктуризацией
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);

// console.log("Деструктуризация объектов")
// const user = {
//     name: "Алиса",
//     age: 25,
//     city: "Москва",
// };
//const userName = user.name;
//const userAge = user.age;
//console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);

// console.log("Деструктуризация в параметрах");
// // Старый способ
// function printUserOld(user) {
//     console.log(`Имя ${user.name}`); 
//     console.log(`Возраст: ${user.age}`);
//     console.log(`Город: ${user.city}`)
// }
// //новый
// function printUser({ name, age, city }) {
//     console.log(`Имя: ${name}`);
//     console.log(`Возраст:${age}`)
//     console.log(`Город: ${city}`)
// }
// printUserOld(user);
// console.log();
// printUser(user);

// const product = {
//     name: "Ноутбук",
//     price: 45000,
//     category: "Электроника",
//     inStock: true
// };
// const { name: productName, price, category, inStock } = product;
// console.log("Продукт:", productName, price, category, inStock);
// function printProduct({ name, price, category, inStock }) {
//     console.log(`Товар: ${name}`);
//     console.log(`Цена: ${price} руб.`);
//     console.log(`Категория: ${category}`);
//     console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
// }
// printProduct(product);

// console.log("Spread для массивов");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);

// const copy = [...arr1];
// console.log("Копия массива:", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("Spread для объектов");

// const person = {
//     name: "Иван",
//     age: 30,
// };
// const address = {
//     city: "Санкт-Петербург",
//     street: "Невский проспект",
// };
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);
// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);
// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор");
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);

const nums1 = [10, 20, 30];
const nums2 = [40, 50, 60];
const allNums = [...nums1, ...nums2];
console.log("Объединённые массивы:", allNums);
function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log("Максимум из 5, 12, 8, 20, 3:", findMax(5, 12, 8, 20, 3));
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log("Объединённые объекты:", mergedObj);
