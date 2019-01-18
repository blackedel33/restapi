let express = require('express')
let router = express.Router()

router.get('/siswa', (req, res) => {

if(req.query.name){
	res.send(`Mengambil Data Dari ${req.query.name}`)
}
else{
	res.send('kamu mengambil data seseorang')
}
// res.send('you have requested a person')

})

// spesific

router.get('/siswa/:name', (req, res) => {

res.send(`you have requested a person ${req.params.name}`)

})

module.exports = router

