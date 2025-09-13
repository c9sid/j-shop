import ProductCard from '@/components/ProductCard'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
      <ProductCard />
    </div>
  )
}

export default page