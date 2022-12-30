//require express library
const express = require('express');
const res = require('express/lib/response');
const app = express();

//take data from database
var fs = require('fs');
var Result = fs.readFileSync('result.json');
var result = JSON.parse(Result);

//srart the sarver
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

//send and recive data from client server
app.post('/api', (request, response) => {

    //take data from client
    const content = request.body.content;
    if (content == "donothing"){}

    //store data in database
    else{result += content + '<br><br>';}
    var data = JSON.stringify(result);
    fs.writeFile('result.json', data, finished);

    function finished(){ console.log('saved'); }

    response.json({
        Result : result
    });
});
