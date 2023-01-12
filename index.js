const rookout = require('rookout')
const express = require('express')
const app = express()
const port = 3000
rookout.start({
    token: '48c487135cb7261785ee93623ec9a19f65ec54244882ed1090829fc5b9c68c06',labels: {env: 'dev'}})
function caller(a) {
    console.log(a)
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log('Hello this is Piyush')
caller('zskdhfzkdsfj')