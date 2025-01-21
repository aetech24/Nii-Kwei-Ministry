import TShirt from '@/public/stores/t-shirt.png'
import Book from '@/public/stores/books.png'
import Bag from '@/public/stores/bag.png'
import CD from '@/public/stores/cd.png'
import Hoodie from '@/public/stores/hoodie.png'
import Mug from '@/public/stores/mug.png'
import Category from '@/public/stores/category.png'
import Category1 from '@/public/stores/accessory.png'
import Category2 from '@/public/stores/digital.png'

export const store = [
    {image: TShirt, name: "Ministry Logo T-Shirt", category: "Clothing", price: 20.00},
    {image: Book, name: "Devotional Book", category: "Digital Product", price: 12.00},
    {image: Bag, name: "Scripture Tote Bag", category: "Accessories", price: 18.00},
    {image: CD, name: "Worship Album Download", category: "Digital Product", price: 7.00},
    {image: Hoodie, name: "Faith Hoodie", category: "Clothing", price: 28.00},
    {image: Mug, name: "Inspirational Mug", category: "Accessories", price: 15.00},
]

export const category = [
    {image: Category, category: "Clothing", description: "T-shirts, hoodies, and caps featuring ministry logos"},
    {image: Category1, category: "Accessories", description: "Keychains, mugs, tote bags, and wristbands"},
    {image: Category2, category: "Digital Products", description: "Downloadable worship music and sermon series"},
]