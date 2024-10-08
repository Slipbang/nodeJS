//Модуль path позволяет удобным образом взаимодействовать с путями(абсолютными или относительными)
const path = require('path');
//
// //метод join() позволяет соединить несколько участков пути вне зависимости от ОС
// //с помощью __dirname можно на любом устройстве получить абсолютный путь от корня до директории выполнения, __filename - имя файла
// console.log(path.join(__dirname, 'first', 'second', 'third'))

// //Метод resolve() похожа на join() но всегда возвращает абсолютный путь
// console.log(path.resolve('first', 'second', 'third'))

// //метод parse() парсит путь в объект
// const fullPath = path.resolve(__dirname, 'first', 'second', 'third.js');
// console.log('парсинг пути', path.parse(fullPath));
// // результат выполнения
// const fullPathObject = {
//     root: 'C:\\',
//     dir: 'C:\\Users\\Slipbang\\Desktop\\node JS\\first\\second',
//     base: 'third',
//     ext: '.js',
//     name: 'third'
// }

//console.log('Разделитель в ОС', path.sep);
// console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'));
// console.log('Название файла', path.basename(fullPath));
// console.log('Расширение файла', path.extname(fullPath));

// =============================================================================== 43:12



