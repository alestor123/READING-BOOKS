var {current}  = require('../api');

module.exports = async (req,res) => {
res.json((await current(req.query.id || process.env.ID))[0])
}
