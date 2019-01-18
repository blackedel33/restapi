let express = require('express')

let app = express()

//inget aturan di windows ./routes/siswa
let personRoute =  require('./routes/siswa')



app.use(personRoute)
app.use(express.static('public'))

//membaca port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info('Server started' ))