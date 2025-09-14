import ProductCard from '@/components/ProductCard'
import Slider from '@/components/Slider'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="slider py-5 flex items-center">
        <Slider />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
        <ProductCard />
      </div>
    </>
  )
}

export default page