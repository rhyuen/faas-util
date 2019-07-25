module.exports = async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Access-Control-Allow-Origin');
        const {
            name,
            email
        } = req.body;
        console.log(name);
        console.log(email);
        res.status(200).json({
            name,
            email
        });
    } catch (e) {
        res.status(500).json({
            message: "Errors were made",
            details: e
        });
    }
}