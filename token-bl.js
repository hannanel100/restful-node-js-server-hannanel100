const dalFunc = require('./dal');
const dal = dalFunc('phones/token.json');

function getTokens(callback) {
    dal.readAll((e, allTokens) => {
        if (e) {
            callback(e);
        } else {
            callback(null, allTokens);
        }
    })
}
function createToken(addedToken, callback) {
    dal.saveOne(addedToken, (e) => {
        if (e) {
            callback(e);
        } else {
            callback(null);
        }
    })
}

module.exports.getTokens = getTokens;
module.exports.createToken = createToken;