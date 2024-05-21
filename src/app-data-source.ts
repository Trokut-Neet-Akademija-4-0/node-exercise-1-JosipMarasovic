import { DataSource } from 'typeorm'

import Basket from './entities/Basket'
import Blog from './entities/Blog'
import Category from './entities/Category'
import Customer from './entities/Customer'
import FileImportTracker from './entities/FileImportTracker'
import Images from './entities/Images'
import PaymentMethod from './entities/PaymentMethod'
import Popular from './entities/Popular'
import Products from './entities/Products'

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin1234',
  database: 'postgres',
  entities: [
    Basket,
    Blog,
    Category,
    Customer,
    FileImportTracker,
    Images,
    PaymentMethod,
    Popular,
    Products
  ],
 migrations: ['src/migration/*.ts'],
})
