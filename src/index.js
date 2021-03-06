let express = require('express')

let app = express()

//inget aturan di windows ./routes/siswa
let personRoute =  require('./routes/siswa')


let path = require('path')
app.use((req, res, next) => {

	console.log(`${new Date().toString()} => ${req.originalUrl}`)
	next()
})

app.use(personRoute)
app.use(express.static('public'))

//404 not found
app.use((req, res, next) => {
	res.status(404).send('We Think you are lost!')
})

//handler error 500 
app.use((err, req, res, next) => {
	console.error(err.stack)

	res.sendFile(path.join(__dirname, '../public/500.html'))
})

//membaca port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info('Server started' ))