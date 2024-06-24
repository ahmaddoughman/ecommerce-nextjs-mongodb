'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import Styles from './navbar.module.css'

const Navbar = () => {

  const pathname = usePathname();
  const showNavbar = !pathname.startsWith('/admin');

    const links = [
        {
            title: "Home",
            path:"/"
        },
        {
            title: "Shop",
            path:"/shop"
        },
        {
            title: "Contact",
            path:"/contact"
        } 
    ]

  return (
    <>{showNavbar && ( <div className={Styles.container}>
    <div><Link href="/" style={{textDecoration:"none", color:"black", margin:10}}>Logo</Link></div>
    
    <div className={Styles.link}>
      {links.map((link, index)=>
          <Link  key={index} style={{textDecoration:"none", color:"black", margin:10}} 
              className={`${pathname === link.path && Styles.nav}`} href={link.path}>
                  {link.title}
          </Link>
      )}
    </div>

    <div className={Styles.cont}>
      <div><Link  style={{textDecoration:"none", color:"black", margin:10}} href='/cart'>cart</Link></div>
      <div><Link  style={{textDecoration:"none", color:"black", margin:10}} href='/login'>login</Link></div>
    </div>

  </div>)}</>
  )
}

export default Navbar
