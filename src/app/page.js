'use client'
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

const page = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image src="https://mallofamerica.com/sites/default/files/2022-09/Shopping_1920x1080.jpg" alt="Image Carousel" width={1380} height={576}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Image src="https://webassets.linkretail.com/wp-content/uploads/2018/11/64684583_6124097086552_5687371173394907136_n.png" alt="Image Carousel" width={1380} height={576}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80" alt="Image Carousel" width={1380} height={576}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>  
    </div>
  );
}

export default page
