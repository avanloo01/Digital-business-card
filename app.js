const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, "Static")));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.get('/save-contact',function(req,res) {
    console.log('Get contact');
     
    // Download function provided by express
    res.download(path.join(__dirname,'Static/Assets/ArthurVL.vcf'), function(err) {
        if(err) {
            console.log(err);
        }
    });
});

app.listen(process.env.PORT || PORT, (err) => {
    if(!err){
        console.log("Server running; listening on port " + PORT);
    }
    else {
        console.log("Error occurred, server can't start", error);
    }
});
