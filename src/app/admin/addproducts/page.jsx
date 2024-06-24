'use client'
import React, {  useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
import Styles from './addproducts.module.css'
import Addproducts from '@/component/addproducts/Addproducts';


const Page = () => {

  const [showModal, setShowModal] = useState(false);

  const [products, setProducts] = useState([]);

  const fetchCategories = async () => {
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
    fetchCategories();
  }, []);

  const handleplus = (e) =>{
    e.preventDefault();
    setShowModal(true)
  }

  return (
    <div>
      <h2 className={Styles.h2}>Add Products </h2>
      <div className={Styles.container}>
      {products.map((product,index) => {
        const imgSrc = product.img.startsWith("C:\\fakepath\\")
        ? "/images/" + product.img.split("\\").pop()
        : product.img;
        
        return(
          <Card style={{ width: '18rem' }} className={Styles.cardd} key={index}>
          <div className={Styles.eddl}>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-outline icon-tabler-edit">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                <path d="M16 5l3 3" />
              </svg>
            </p>
            <p><CloseButton /></p>
          </div>
          <Card.Img variant="top" src={imgSrc} height={300} />
          <Card.Body>
            <Card.Title>{product.desc}</Card.Title>
            <Card.Title>{product.price} $</Card.Title>
            <Card.Title>{product.category}</Card.Title>
          </Card.Body>
        </Card>
          )})}
        
      </div>


      <div>
        
        {showModal && <Addproducts isVisible={showModal} onClose={() => setShowModal(false)} />}
      </div>


      <div>
        <p className={Styles.plus} onClick={handleplus}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-outline icon-tabler-circle-plus">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
          </svg>
        </p>
      </div>

    </div>
  )
}

export default Page
