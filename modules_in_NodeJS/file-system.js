const fs = require('fs');
const path = require('path');

// Синхронный вариант mkdir (создание директории)
//fs.mkdirSync(path.resolve(__dirname, 'dir'));
//fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2'), {recursive: true});

// // Асинхронный вариант mkdir (создание директории)
// console.log('START');
// fs.mkdir(path.resolve(__dirname, 'newDir1', 'newDir2', 'newDir3'),{recursive: true}, (err, ) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Папка создана');
// });
//
// console.log('END');

// Асинхронное удаление директории
// fs.rmdir(path.resolve(__dirname, 'newDir1'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// // Создание и запись в файл, второй переданный аргумент будет ПЕРЕЗАТИРАТЬ данные в случае если они есть в файле
// fs.writeFile(path.resolve(__dirname, 'test.txt'), '123456qwerty', (err) => {
//     if (err) throw err;
//     console.log('Файл создан')
// })

// // В случае если нужно записать в файл не удаляя старое содержимое требуется использовать appendFile
// fs.appendFile(path.resolve(__dirname, 'test.txt'), '123456qwerty', (err) => {
//     if (err) throw err;
//     console.log('Запись добавлена')
// })

// // Чтение файла
// fs.readFile(path.resolve(__dirname, '../test.txt'), {encoding: 'utf-8'}, (err, data) => {
//     if (err) throw err;
//
//     console.log(data)
// })

// //Асинхронное создание, запись и чтение файла с помощью промисов
// const writeFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//         if (err) reject(err.message);
//         resolve()
//     }))
// }
//
// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
//         if (err) reject(err.message);
//         resolve()
//     }))
// }
//
// const readFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
//         if (err) reject(err.message);
//         resolve(data);
//     }))
// }
//
// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.rm(path, (err) => {
//         if (err) reject(err.message);
//         resolve();
//     }))
// }
//
// writeFileAsync(path.resolve(__dirname, 'test1.txt'), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test1.txt'), '123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test1.txt'), '456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test1.txt'), '789'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test1.txt')))
//     .then(data => console.log(data))
//     .then(() => {
//         removeFileAsync(path.resolve(__dirname, 'test1.txt'))
//         console.log('Файл удален')
//     })
//     .catch(err => console.log(err));
//
// const text = process.env.TEXT || '';
// const currPath = (p) => path.resolve(__dirname, p);
//
// writeFileAsync(currPath('text.txt'), text)
//     .then(() => readFileAsync(currPath('text.txt')))
//     .then(data => data.split(' ').length)
//     .then(len => writeFileAsync(currPath('length.txt'), `Кол-во слов ${len}`))
//     .then(() => removeFileAsync(currPath('text.txt')))







