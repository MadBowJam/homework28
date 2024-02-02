/*
 Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
*/

const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/.test(email);


// console.log(isValidEmail('example@example.com')) // Повинно вивести: true
// console.log(isValidEmail('invalid-email'))       // Повинно вивести: false


module.exports = isValidEmail
