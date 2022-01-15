import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import route from './routes'

dotenv.config()

const { PORT, DATABASE } = process.env

mongoose.connect(String(DATABASE))

const api = express()

api.use(express.json())
api.use(cors())
api.use(route)

api.listen(PORT, () => {
  console.log(` 🌅  Api Running: ${PORT}`)
})

export default api
