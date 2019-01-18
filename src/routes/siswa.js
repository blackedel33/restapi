let express = require('express')
let router = express.Router()

router.get('/siswa', (req, res) => {

if(req.query.nama){
	res.send(`Mengambil Data Dari ${req.query.nama}`)
}
else{
	res.send('Data Siswa SMK')
}
// res.send('you have requested a person')

})

// spesific

router.get('/siswa/:nama', (req, res) => {

res.send(`Mengambil Data Dari ${req.params.nama}`)

})

router.get('/error', (req, res) => {
	throw new Error('error uripmu')
})

module.exports = router

