import { products } from "@/libs/data"
import slugify from "@/libs/slugify"
import Link from "next/link"

const ProductCard = () => {
    return (
        <>
            {products.map((product) => (
                <div key={product.id} className='relative bg-white rounded-2xl shadow-stone-100 shadow-2xs group'>
                    <div className="img aspect-square overflow-hidden rounded-t-2xl">
                        <Link href={`products/${slugify(product.slug)}`}><img src={product.image} alt='img' className='object-cover object-top size-full group-hover:scale-110 transition duration-900 ease-in-out' /></Link>
                        <div className="tag absolute top-2 left-2 z-10">
                            <p className='uppercase shadow-2xs bg-stone-50/30 px-2 py-3 text-[9px] md:text-[12px] font-medium leading-0 rounded-full'>{product.tag}</p>
                        </div>
                    </div>
                    <div className="info p-3 text-xs md:text-[16px] flex flex-col gap-1">
                        <Link href={`products/${slugify(product.slug)}`}><h3 className="uppercase font-medium tracking-wide line-clamp-1">{product.name}</h3></Link>
                        <p className="font-light line-clamp-1 capitalize">{product.category}</p>
                        <div className="mkt flex items-center justify-between gap-3">
                            <div className="offer">
                                <p className={`${product.offer >= 50 ? "text-green-500" : "text-yellow-500"}`}>{product.offer}% off</p>
                            </div>
                            <div className="price flex gap-1 items-center font-medium">
                                <div className="selling">
                                    <p>${product.sellingPrice}</p>
                                </div>
                                <div className="actual">
                                    <p className="text-neutral-500 line-through">${product.actualPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductCard