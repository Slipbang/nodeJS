// const http = require('http');
// const EventEmitter = require('events');

// const server = http.createServer((req, res) => {
//     // Сервер сайд рендеринг
//     // res.writeHead(200, {
//     //     'Content-type': 'text/html;'
//     // })
//     // res.end('<h1>Hello world</h1>');
//
//     // отправка JSON
//     res.writeHead(200, {
//         'Content-type': 'application/json'
//     })
//
//     if (req.url === '/users') {
//         return res.end(JSON.stringify([
//             {id: 1, name: 'Dmitry'}
//         ]))
//     }
//
//     if (req.url === '/posts') {
//         return res.end('POSTS')
//     }
// })
//
// server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));