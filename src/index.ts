import express from 'express'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const app = express()
app.use(express.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome!' })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`App running on port ${port}..`)
})
