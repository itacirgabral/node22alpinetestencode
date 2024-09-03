
const app = require('express')()

app.get('/', (req, res) => res.json({
  bufferfrom: Buffer.from('áòçã').toString('utf8'),
  hardcode: 'áòçã'
}))

app.listen(3000, () => {
  console.log('http://localhost:3000')
})