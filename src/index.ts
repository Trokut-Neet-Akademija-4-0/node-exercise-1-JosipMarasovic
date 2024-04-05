// src/index.js
import express, { Express } from 'express'
import homeRoutes from './routes/homeRoutes'
import userRoutes from './routes/userRoutes'
import popularRoutes from './routes/popularRoutes'
import aboutRoute from './routes/aboutRoute'


const app: Express = express()
const port = process.env.PORT || 3000

app.use('/', homeRoutes)
app.use('/users', userRoutes)
app.use('/popular',popularRoutes)
app.use('/about',aboutRoute)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
