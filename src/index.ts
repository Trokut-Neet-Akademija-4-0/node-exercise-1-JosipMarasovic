// src/index.js
import express, { Express } from 'express'
import homeRoutes from './routes/homeRoutes'
import popularRoutes from './routes/popularRoutes'
import aboutRoute from './routes/aboutRoute'
import blogRoutes from './routes/blogRoutes'
import categoryRoutes from './routes/categoryRoutes'
import productDetailRoutes from './routes/productDetailRoutes'
import errorHandler from './middlewares/errorHandler'
import cartRoutes from './routes/cartRoutes'



const app: Express = express()
const port = process.env.PORT || 3000

app.use('/', homeRoutes)
app.use('/popular',popularRoutes)
app.use('/about',aboutRoute)
app.use('/blog',blogRoutes)
app.use('/items',categoryRoutes)
app.use('/productDetail',productDetailRoutes)
app.use('/cart',cartRoutes)

app.use(errorHandler)



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
