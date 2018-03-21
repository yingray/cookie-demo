import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

const corsOptions = {
  // origin: 'http://localhost:3001',
  // credentials: true
}

app.use(cors(corsOptions))

app.use(cookieParser())

function setCookie(req, res) {
  var cookie = req.cookies ? req.cookies.cookieName : null
  if (cookie === undefined) {
    // no: set a new cookie
    var randomNumber = Math.random().toString()
    randomNumber = randomNumber.substring(2, randomNumber.length)
    res.cookie('cookieName', randomNumber, { maxAge: 900000, httpOnly: true })
    console.log('cookie created successfully')
  } else {
    // yes, cookie was already present
    console.log('cookie exists', cookie)
  }
}

app.post('/cookie', (req, res) => {
  setCookie(req, res)
  res.send('ok')
})

app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies)
  return res.send(req.cookies)
})

app.listen(3000, err => {
  if (err) console.log(err)
  return console.log('started')
})
