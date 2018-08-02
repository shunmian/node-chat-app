const express = require('express')
const path = require('path')

const app = express()
const viewRootPath = path.join(__dirname, './../public')

app.use(express.static(viewRootPath))

const server = app.listen(3000, () => {
  const address = server.address()
  console.log(`server start on ${address.address}: ${address.port}`)
})