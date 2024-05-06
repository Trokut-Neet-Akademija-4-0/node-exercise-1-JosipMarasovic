// src/index.js
import express, { Express } from 'express'
import 'reflect-metadata'
import homeRoutes from './routes/homeRoutes'
import aboutRoute from './routes/aboutRoute'
import blogRoutes from './routes/blogRoutes'
import cartRoutes from './routes/cartRoutes'
import errorHandler from './middlewares/errorHandler'
import productsRoute from  './routes/productsRoute'
import dataSource from './app-data-source'
import ProductImporter from './config/productImporter'
import BlogImporter from './config/blogImporter'


dataSource
  .initialize()
  .then( async() => {
    console.log('Data Source has been initialized!')
    await ProductImporter.loadAllProducts()
    await BlogImporter.loadAllBlogs()
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })



const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(errorHandler)

app.use('/', homeRoutes)
app.use('/about',aboutRoute)
app.use('/blog',blogRoutes)
app.use('/cart',cartRoutes)
app.use('/products',productsRoute)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
