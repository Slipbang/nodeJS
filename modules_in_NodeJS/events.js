const Emitter = require('events');

const emitter = new Emitter();

const callback = (data, secondArg, thirdArg, ect) => {
    console.log('Вы прислали сообщение ' + data);
    console.log('Второй аргумент ' + secondArg);
}

// с помощью функции on создается событие
emitter.on('message', callback);

const MESSAGE = process.env.message || '';

if (MESSAGE) {
    //Функция emit используется для генерации событий, ее аргумент - название события которое мы генерируем.
    emitter.emit('message', MESSAGE, 123);
} else {
    emitter.emit('message', 'вы не указали сообщение')
}

// Когда удобно использовать?
// 1) http
// 2) websockets
// 3) long pulling
// 4) clusters

// В случае если событие требуется сгенерировать единожды, нужно использовать метод once

// emitter.once('message', (data, secondArg, thirdArg, ect) => {
//     console.log('Вы прислали сообщение ' + data);
//     console.log('Второй аргумент ' + secondArg);
// })
//
// // removeAllListeners удаляет все слушатели
// emitter.removeAllListeners()
//
// // removeListener удаляет какой-то конкретный слушатель, первый аргумент имя события, второй - колбэк;
// emitter.removeListener('message', callback)