const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const uuidv1 = require('uuid/v1');
const app = express();
const PORT = 3201;
const phoneBl = require('./phone-bl');
const tokenBl = require('./token-bl');
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/phone', (req, res) => {
    phoneBl.getPhones((e, data) => {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

app.get('/phone/:id', (req, res) => {
    console.log(req.params.id)
    phoneBl.getPhone(req.params.id, function (e, data) {
        if (e) {
            console.log(e)
            return res.status(500).send();
        } else {
            // console.log(data);
            return res.send(data);
        }
    })
});

app.post('/phone', (req, res) => {
    phoneBl.createPhone(req.params.id, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});
app.put('/phone/:id', (req, res) => {
    phoneBl.updatePhone(req.body, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.status(200).send();
        }
    })
});
app.delete('/phone/:id', (req, res) => {
    phoneBl.deletePhone(req.params.id, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            console.log(data);
            return res.send('success!');
        }
    })
});

app.get('/token', (req, res) =>  {
    tokenBl.getTokens((e, data) => {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});
app.post('/token', (req, res) => {
    console.log("req.body: " + req.body.name)
    let tokenObj = {
        name: req.body.name,
        token: uuidv1()
    }
    console.log(tokenObj);
    tokenBl.createToken(tokenObj, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            console.log(data);
            return res.send(data);
        }
    })
});

app.listen(process.env.PORT || PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT || PORT}!`),
);