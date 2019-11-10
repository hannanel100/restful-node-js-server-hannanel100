const fs = require('fs');
const fileName = `./phones/phones.json`;

function readOne(id, callback) {
    fs.readFile(`./phones/${id}.json`, (e, d) => {
        console.log(d);
        const phone = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        console.log(phone);
        if (e) {
            callback(e);
        }
        else {
            callback(null, phone);
        }
    })

}


function readAll(callback) {
    fs.readFile(fileName, (e, d) => {
        const allPhones = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        allPhones.sort(function (a, b) {
            return a.id - b.id;
        });
        if (e) {
            callback(e);
        } else {
            callback(null, allPhones);
        }
    })
}

function saveOne(addedRunner, callback) {
    fs.readFile(fileName, (e, d) => {
        const runnersArray = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        runnersArray.push(addedRunner);
        fs.writeFile(fileName, JSON.stringify(runnersArray), (e) => {
            if (e) {
                callback('error');
            }
            else {
                callback(null);
            }
        });
    });
}

function updateOne(phoneToUpdate, callback) {
    fs.readFile(fileName, (e, d) => {
        let allPhones = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        allPhones.map((phone) => {
            if (phone.id.toString() == phoneToUpdate.id.toString()) {
                phone.carrier = phoneToUpdate.carrier;
                phone.id = phoneToUpdate.id;
                phone.imageUrl = phoneToUpdate.imageUrl;
                phone.name = phoneToUpdate.name;
                phone.snippet = phoneToUpdate.snippet;
            }
        })
        fs.writeFile(fileName, JSON.stringify(allPhones), (e) => {
            if (e) {
                callback('error');
            }
            else {
                callback(null);
            }
        });
    })
}

function deleteOne(phoneToDelete, callback) {
    fs.readFile(fileName, (e, d) => {
        let allPhones = d && d.length > 0 ? JSON.parse(d.toString()) : [];

        allPhones = allPhones.filter(r => r.id !== phoneToDelete);

        fs.writeFile(fileName, JSON.stringify(allPhones), (e) => {
            if (e) {
                callback(e);
            } else {
                callback(null);
            }
        })
    });
}

module.exports.readOne = readOne;
module.exports.readAll = readAll;
module.exports.saveOne = saveOne;
module.exports.deleteOne = deleteOne;
module.exports.updateOne = updateOne;

