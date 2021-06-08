var {read}  = require('../api');
module.exports = async (req,res) => {
res.json(await read(req.query.id || process.env.ID))
}