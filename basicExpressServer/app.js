const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/auth', (req, res) => {
    console.log(req);
    console.log(res);
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})