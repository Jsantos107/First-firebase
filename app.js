console.log("test")

fetch( 'https://testin-backend.herokuapp.com/')
    .then(response => response.json())
    .then(console.log)