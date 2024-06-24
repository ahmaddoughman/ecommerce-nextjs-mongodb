'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from './products.module.css'

const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    useEffect(() => {
      fetchProducts();
    }, []);

  return (
    <div>
      <h1 className={Styles.category}>Top Trends</h1>
        <div className={Styles.container}>
          {products.map((product,index) => {
          const imgSrc = product.img.startsWith("C:\\fakepath\\")
          ? "/images/" + product.img.split("\\").pop()
          : product.img;
          
          return(
            <div className={Styles.content} key={index}>
            <Image src={imgSrc} alt='image-category' width={270} height={300} />
            <div>
                <h3 className={Styles.desc}>{product.desc}</h3>
                <p>{product.price} $</p>
                <div style={{display:'flex', justifyContent:'space-around', marginTop:"10px"}}>
                    <Link href={`/shop/product/${product._id}`} style={{textDecoration:"none", color:"black"}}>more details</Link>
                    <Link href="/cart" style={{textDecoration:"none", color:"black"}}>Add to Cart</Link>
                </div>
            </div>
        </div>
            )})}
            {/* <div className={Styles.content}>
                <Image src="/images/jeans-category.png" alt='image-category' width={270} height={300} />
                <div>
                    <h3 className={Styles.desc}>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</h3>
                    <p>prices $</p>
                    <div style={{display:'flex', justifyContent:'space-around', marginTop:"10px"}}>
                        <Link href={`/shop/product/${product.productId}`} style={{textDecoration:"none", color:"black"}}>more details</Link>
                        <Link href="/cart" style={{textDecoration:"none", color:"black"}}>Add to Cart</Link>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Products
