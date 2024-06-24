import React from 'react'
import Styles from './category.module.css'
import Products from '@/component/Products/Products'
import Image from 'next/image'
import Link from 'next/link'

const page = ({params}) => {

    const categoryId = params.categoryId

    const product = [];

  return (
    <div>
      categoryId -{categoryId}
      <h1 className={Styles.category}>Title</h1>

      <div className={Styles.container}>
        <div className={Styles.content}>
          <Image src="/images/jeans-category.png" alt='image-category' width={270} height={300} />
          <div>
              <h3 className={Styles.desc}>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</h3>
              <p>prices $</p>
              <div style={{display:'flex', justifyContent:'space-around', marginTop:"10px"}}>
                  <Link href={`/shop/products/${product.productId}`} style={{textDecoration:"none", color:"black"}}>more details</Link>
                  <Link href="/cart" style={{textDecoration:"none", color:"black"}}>Add to Cart</Link>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
