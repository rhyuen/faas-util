const crypto = require("crypto");
const url = require("url")

module.exports = async (req, res) => {
    try {

        const {
            query
        } = url.parse(req.url, true)
        console.log("req url: %s", req.url);
        console.log("q value: %s", query.q);
        // const currentURL = new URL(req.headers.host + req.url);
        // const queryValue = currentURL.searchParams.get("q");
        // const stringedQuery = JSON.stringify(queryValue);
        const hash = crypto.createHash("sha256");
        hash.update(String(query.q));

        const payload = {
            q: query.q,
            result: hash.digest("hex")
        };
        res.end(JSON.stringify(payload));
    } catch (e) {
        console.error(e.message);
        console.error(e.stack);
        const errorResponse = {
            error: true,
            details: e.message,
            stack: e.stack
        };
        res.end(JSON.stringify(errorResponse));
    }
};