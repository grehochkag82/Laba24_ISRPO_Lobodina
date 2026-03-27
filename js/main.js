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

const product = {
    name: "Ноутбук",
    price: 45000,
    category: "Электроника",
    inStock: true
};
const { name: productName, price, category, inStock } = product;
console.log("Продукт:", productName, price, category, inStock);
function printProduct({ name, price, category, inStock }) {
    console.log(`Товар: ${name}`);
    console.log(`Цена: ${price} руб.`);
    console.log(`Категория: ${category}`);
    console.log(`В наличии: ${inStock ? "Да" : "Нет"}`);
}
printProduct(product);