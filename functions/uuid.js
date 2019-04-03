const uuid = require("uuid/v4");

module.exports = async (req, res) => {
    const payload = {
        data: uuid()
    };
    res.end(JSON.stringify(payload));
}