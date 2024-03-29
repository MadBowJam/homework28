/*
 Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 Функція повертає true, якщо URL валідний, і false в іншому випадку.
*/

const isValidUrl = url => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(url);


// console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
// console.log(isValidUrl('invalid-url'))            // Повинно вивести: false


module.exports = isValidUrl
