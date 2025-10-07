import ProductCard from '@/components/ProductCard'
import React from 'react'

const products = () => {
    return (
        <>
            <div className='py-10 px-5'>
                <div className='py-5'>
                    <h2 className='text-center text-2xl'>All Productss</h2>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default products