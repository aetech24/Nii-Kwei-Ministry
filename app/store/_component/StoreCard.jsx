import { store } from '@/constants/store'
import Image from 'next/image'
import React from 'react'

const StoreCard = () => {
  return (
    <div className='grid grid-cols-3 gap-10 py-6'>
        {store.map((item, id) => {
            return (
                <div key={id} className='flex flex-col gap-2 shadow-xl pb-4 rounded-md'>
                    <Image src={item.image} alt={item.name} className='rounded-t-md'/>
                    <div className='flex flex-col gap-1 px-4'>
                        <p>{item.category}</p>
                        <p className='text-xl font-semibold'>{item.name}</p>
                        <p className='text-purple-500 text-medium'>${item.price}.00</p>
                    </div>
                    <button className='border border-button py-2 rounded-md text-button mx-4'>Add to Cart</button>
                </div>
            )
        })}
    </div>
  )
}

export default StoreCard