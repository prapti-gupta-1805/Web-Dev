//API: Apllication Programming Interface
//JSON: JavaScript Object Notation

let JSONData = '{"name": "John Doe", "age": 30, "city": "New York"}';

let parsedData = JSON.parse(JSONData); // Convert JSON string to JavaScript object
console.log(parsedData.name); // Output: John Doe

let OriginalData = JSON.stringify(parsedData); // Convert JavaScript object to JSON string

//hoppscotch.io: tool to test API requests (alternative to Postman)

//AJAX: Asynchronous JavaScript and XML
//process of request and response between a web browser and a server

//http verbs: GET, POST, PUT, DELETE

//status codes: 200 (OK), 404 (Not Found), 500 (Internal Server Error), 400 (Bad Request)

//add info to URL: https://api.example.com/users?name=John+Doe&age=30 (here name=John is a query (key value pair) and /users is a path)

//http headers: response and request headers
//request headers are additional information sent by the client to the server with every request
//response headers are additional information sent by the server to the client with every response