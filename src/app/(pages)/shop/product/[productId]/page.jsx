import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Styles from './product.module.css'


const getData = async (productId) => {
  const res = await fetch(`http://localhost:3000/api/products/${productId}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const page = async ({params}) => {

  const { productId } = params;

  // FETCH DATA WITH AN API
  const productData = await getData(productId);

  if (!productData.success) {
    return (
      <div className={Styles.container}>
        <p>Product not found.</p>
      </div>
    );
  }

  const product = productData.data;

  const imgSrc = product.img.startsWith("C:\\fakepath\\")
          ? "/images/" + product.img.split("\\").pop()
          : product.img;

  return (
    <div className={Styles.container}>
      
      <div>
        <Image src={imgSrc}  alt='image-category' width={437} height={486}/>
      </div>

      <div className={Styles.right}>
        <h1 className={Styles.title}>Category {product.category}</h1>
        <p className={Styles.decs}>{product.desc}</p>
        <h2 className={Styles.price}>{product.price} $</h2>
        <Link className={Styles.cart} href="/cart">Add to Cart</Link>
      </div>

    </div>
  )
}

export default page
