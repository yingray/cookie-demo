import express from 'express'

const app = express()

app.use(express.static('static'))

app.listen('3001', (err) => {
  if(err) return console.error(err)
  return console.log('client is started')
})