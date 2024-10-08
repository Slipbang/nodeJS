const os = require('NodeJS_modules/os');
const cluster = require('cluster');

// //platform позволяет получить текущую операционную систему
// console.log(os.platform()) //win32

// //arch позволяет получить архитектуру процессора
// console.log(os.arch()) //x64

// //cpus возвращает массив, где каждый объект массива - описание ядра процессора
// console.log(os.cpus())

// cpusArray [
//     {
//         model: 'Intel(R) Core(TM) i5-9600KF CPU @ 3.70GHz',
//         speed: 3696,
//         times: {
//             user: 447250,
//             nice: 0,
//             sys: 1707546,
//             idle: 38694796,
//             irq: 482984
//         }
//     },
//     {
//         model: 'Intel(R) Core(TM) i5-9600KF CPU @ 3.70GHz',
//         speed: 3696,
//         times: {
//             user: 1808562,
//             nice: 0,
//             sys: 26226046,
//             idle: 12814984,
//             irq: 3656
//         }
//     },
//     {
//         model: 'Intel(R) Core(TM) i5-9600KF CPU @ 3.70GHz',
//         speed: 3696,
//         times: { user: 960375, nice: 0, sys: 1049437, idle: 38839781, irq: 3609 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i5-9600KF CPU @ 3.70GHz',
//         speed: 3696,
//         times: { user: 528000, nice: 0, sys: 580375, idle: 39741218, irq: 4484 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i5-9600KF CPU @ 3.70GHz',
//         speed: 3696,
//         times: { user: 434343, nice: 0, sys: 196265, idle: 40218984, irq: 3546 }
//     },
//     {
//         model: 'Intel(R) Core(TM) i5-9600KF CPU @ 3.70GHz',
//         speed: 3696,
//         times: { user: 624765, nice: 0, sys: 161656, idle: 40063171, irq: 2203 }
//     }
// ]

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length-2; i++) {
//         cluster.fork();
//     }
//
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Воркер с pid=${worker.process.pid} был остановлен`);
//         if (code === '...') {
//             cluster.fork()
//         } else {
//             console.log('Воркер умер')
//         }
//
//     })
// } else {
//     console.log(`Воркер с pid=${process.pid} запущен`)
//
//     setInterval(() => {
//         console.log(`Воркер с pid=${process.pid} работает`)
//     }, 5000)
// }

