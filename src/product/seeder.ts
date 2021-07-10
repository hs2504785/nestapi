import { seeder } from 'nestjs-seeder';
import { ProductSeeder } from './product.seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.entity';
import { MONGODB_CONNECTION_URL } from '../constants';

seeder({
  imports: [
    MongooseModule.forRoot(MONGODB_CONNECTION_URL),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
}).run([ProductSeeder]);
