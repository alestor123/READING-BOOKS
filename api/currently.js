var {current,badge}  = require('../api');
module.exports = async (req,res) => {
if(req.query.type==='svg') {
res.setHeader('Content-Type', 'image/svg+xml')
res.send((await badge(req.query.id || process.env.ID)))
}
else res.json(await current(req.query.id || process.env.ID))
}
