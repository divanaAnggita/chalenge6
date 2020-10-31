//inisialisasi library
const express = require("express")
const app = express()

//import route siswa
const guru = require("./router/guru")
app.use("/guru", guru)

//membuat web server dengan port 8000
app.listen(8000, () => {
    console.log("server run on port 8000")
})
