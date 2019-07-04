const express = require('express');
const app = express();
const exphandlebars = require('express-handlebars');
const bodyParser = require("body-parser");

app.get("/",(req,res) => {
    res.redirect('app');  
});

const https = require('https');

https.get(`https://api.mercadolibre.com/sites/MLA/search?q= ${serchText}`, (res) => {
  let data = '';

  // A chunk of data has been recieved.
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data).results[0].id);
      let resultado = [{
			"author": 
				{ "name": "Fernando",
				  "lastname": "Cruz" }	
			}];
      for(i=0; i < 4; i++){          
           resultado.push({ "id":JSON.parse(data).results[i].id , "title": JSON.parse(data).results[i].id});
    }
      console.log ("nuevoJSON"+resultado);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


app.listen(3000,() => {
    console.log("Server inicializado");
});
