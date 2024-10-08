const siteIRL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteIRL);

console.log(url)

//  {
//     href: 'http://localhost:8080/users?id=5123',
//     origin: 'http://localhost:8080',
//     protocol: 'http:',
//     username: '',
//     password: '',
//     host: 'localhost:8080',
//     hostname: 'localhost',
//     port: '8080',
//     pathname: '/users',
//     search: '?id=5123',
//     searchParams: URLSearchParams { 'id' => '5123' },
//     hash: ''
// }
