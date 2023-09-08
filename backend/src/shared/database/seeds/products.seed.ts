import { ProductEntity } from '@/product/entities/product.entity';
import { DatabaseType } from '../types';

const producs: Omit<ProductEntity, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    image:
      'https://img.freepik.com/free-photo/skin-products-arrangement-wooden-blocks_23-2148761445.jpg',
    title: 'Cream',
    description: 'Some cream',
    price: 30.5,
    rating: 4,
    isInWatchList: false,
  },
  {
    image:
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Camera',
    description: 'Super camera with super photo quality',
    price: 300,
    rating: 1,
    isInWatchList: false,
  },
  {
    image:
      'https://media.istockphoto.com/id/1183532123/photo/trang-thailand-october-24-2019-customer-lay-down-new-macbook-pro-2019-and-iphone-11-pro-are.jpg?s=612x612&w=0&k=20&c=wNW3Xg3csEqgFORvQy_v8YeB8LLaYB82gSToI1caT08=',
    title: 'Apple gift',
    description: 'Apple gift with Mac and Iphone',
    price: 1000,
    rating: 5,
    isInWatchList: false,
  },
  {
    image:
      'https://images.unsplash.com/photo-1560256608-43f0b6f7588e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyJTIwb24lMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    title: 'Flowers',
    description: 'Nice Flowers',
    price: 2,
    rating: 5,
    isInWatchList: true,
  },
];

export const seed = async (database: DatabaseType) => {
  await Promise.all(producs.map((product) => database.products.create(product)));
};
