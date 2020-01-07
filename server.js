const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();

app.use(express.static(path.join(__dirname, '/public/'))); // Statisk mapp för publika filer... statisk eftersom man ska kunna avända bilder och css

app.set('views', path.join(__dirname, '/views')); // Som statisk mapp för view engine
app.set('view engine', 'ejs'); // Den här raden settar view engine till ejs så att den vet vad den ska använda när man använder res.render

// Så precis som i labben så måste vi skapa en connection

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'julklappar'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.get('/', function(req, res) {
//hämtar datan
  db.query('SELECT * FROM julklappar', (err, result) => {
    if (err) throw err;
    // Efter att man hämtad datan från databasen så kommer vi köra res.render och passera in resultat objektet med datan
    res.render('index', { julklappar: result }); // skickar datan till index filen
  });
});

app.listen(3000);
//sen så öppnas hemsidan på localhost 3000
