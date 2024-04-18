const express = require('express')
const sneaksAPI = require('sneaks-api')

app = express()
let sneaks = new sneaksAPI()

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})


app.get('/search', function (req, res) {
    let array =[]
    sneaks.getProducts(req.query.keyword, 3, function(err, products){
        //res.send(JSON.stringify(products))
        res.send(products)

    })
    
});

app.listen(3000)