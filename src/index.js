const express = require("express")
const app = express()
const port = 3000


app.get("/naipes", (req,res) => {
    
})

app.listen(port, () => {
    console.log("isso aqui executa quando o servidor inicia")
})