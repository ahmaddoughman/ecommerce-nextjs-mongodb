'use client'
import React, { useEffect, useState } from 'react'
import Styles from './category.module.css'
import Image from "next/image";
import Link from 'next/link';

const Category = () => {

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/category');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setCategories(data.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

    //console.log(category)
  return (
    <div>
      <h1 className={Styles.category}>Category</h1>
      <div className={Styles.container}>
        
      {categories.map((category,index) => {
        const imgSrc = category.img.startsWith("C:\\fakepath\\")
        ? "/images/" + category.img.split("\\").pop()
        : category.img;
        
        return(
             <div className={Styles.content} key={index}>
                <Image src={imgSrc} alt='image-category' width={270} height={300} />
                <div>
                    <h3>{category.title}</h3>
                    <Link href={`/shop/category/${category._id}`}  style={{textDecoration:"none", color:"black"}}>view category</Link>
                </div>
              </div> 
          )})}
        {/* <div className={Styles.content}>
            <Image src="/images/jeans-category.png" alt='image-category' width={270} height={300} />
            <div>
                <h3>title</h3>
                <Link href={`/shop/category/${category.categoryId}`}  style={{textDecoration:"none", color:"black"}}>view category</Link>
            </div>
        </div> */}
      </div>
    </div>
  )
}

export default Category
