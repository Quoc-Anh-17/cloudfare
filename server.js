const express = require('express')
const path = require('path')
const app = express()


const fle = path.join(__dirname, 'client', 'build', 'index.html')
console.log(fle)
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(5000, () => console.log("Server is running"))    