const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3201;
const phoneBl = require('./phone-bl')


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
            console.log(data);
            return res.send(data);
        }
    })
});

app.post('/phone', (req, res) => {
    phoneBl.createPhone(req.body, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});
// app.put('/runner/:id', (req, res) => {
//     // runnerBl.updateRunner(req.body, function (e, data) {
//     //     if (e) {
//     //         return res.status(500).send();
//     //     } else {
//     //         return res.status(200).send();
//     //     }
//     // })
// });
app.delete('/phone/:id', (req, res) => {
    phoneBl.deletePhone(req.params.id, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

app.listen(process.env.PORT || PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT || PORT}!`),
);