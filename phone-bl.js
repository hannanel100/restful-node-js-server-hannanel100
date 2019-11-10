const dalFunc = require('./dal');
const dal = dalFunc('phone/phones.json');

function getPhone(id, callback) {
    
    
    dal.readOne(id,  (e, phoneData) => {
        if (e) {
            callback(e);
        } else {
            callback(null, phoneData);
        }
    })
    
}

function getPhones(callback) {
    dal.readAll((e, allPhones) => {
        if (e) {
            callback(e);
        } else {
            callback(null, allPhones);
        }
    })
}

function createPhone(addedPhone, callback) {
    if (typeof addedPhone.id !== 'number') {
        callback('Phone id should be string');
    } else {
        dal.saveOne(addedPhone, (e) => {
            if (e) {
                callback(e);
            } else {
                callback(null);
            }
        })
    }
}

function updatePhone(phoneToUpdate, callback) {
    dal.updateOne(phoneToUpdate, (e) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

function deletePhone(phoneToDelete, callback) {
    dal.deleteOne(phoneToDelete, (e) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

function filterPhoneList(selectedFiltersValues, callback) {
    dal.readAll((e, allPhones) => {
        let newArr = [];
        for (let i = 0; i < allPhones.length; i++) {
            if (allPhones[i].id == selectedFiltersValues.id) {
                newArr.push(allPhones[i]);
            } else if (allPhones[i].name == selectedFiltersValues.name) {
                newArr.push(allPhones[i]);
            } else if (allPhones[i].km == selectedFiltersValues.km) {
                newArr.push(allPhones[i]);
            }
        }
        if (e) {
            callback(e);
        } else {
            callback(null, newArr);
        }
    })
}

module.exports.getPhone = getPhone;
module.exports.getPhones = getPhones;
module.exports.createPhone = createPhone;
module.exports.filterPhoneList = filterPhoneList;
module.exports.deletePhone = deletePhone;
module.exports.updatePhone = updatePhone;