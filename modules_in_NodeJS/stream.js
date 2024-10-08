// в node JS есть 4 типа стримов:
// 1) Readable - чтение
// 2) Writable - запись
// 3) Duplex - для чтения и записи (Readable + Writable)
// 4) Transform - то же что и Duplex, но может изменить данные по мере чтения

const fs = require('fs');
const path = require('path');

// // Чтение файла testDataFile методом readFile, в данном случае файл прочитан целиком
// fs.readFile(path.resolve(__dirname, 'testDataFile.txt'), (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data)
// }) // <Buffer 64 61 74 61 31 32 33 34 35 36 64 61 74 61 31 32 33 34 35 36 64 61 74 61 31 32 33 34 35 36 64 61 74 61 31 32 33 34 35 36 64 61 74 61 31 32 33 34 35 36 ... 301241 more bytes>

// Чтение файла testDataFile при помощи стримов
const stream = fs.createReadStream(path.resolve(__dirname, 'testDataFile.txt'), {encoding: 'utf-8'});

// Один чанк по умолчанию - 64кб
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('open', () => console.log('Начали читать'));
stream.on('end', () => console.log('Закончили читать'));
stream.on('error', (err) => console.log(err));

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test.txt'));

for (let k = 0; k < 20; k++) {
    writableStream.write(k + '\n');
}
//writableStream нужно завершать в ручную!
writableStream.end();

// закрытие стрима
writableStream.close();
writableStream.destroy();

// при работе с http сервером для нас доступно два объекта
const http = require('http');
http.createServer((req, res) => {
    // req - readable stream
    // res - writable stream
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

    stream.pipe(res)

    stream.on('data', chunk => res.write(chunk));
    stream.on('end', chunk => res.end());
})