const express = require('express');

const app = express();


// app.use(express.static('./public'))
app.listen(3000);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('index', {message: "hello world"})
})
