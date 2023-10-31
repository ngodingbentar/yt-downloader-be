import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import apiRouter from './routers/apiRouter.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1', apiRouter)

app.get('/', (req, res) => {
  res.send('server is ready')
})
app.use((err, req, res, next) => {
  res.status(500).send({message: err.message})
})
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})