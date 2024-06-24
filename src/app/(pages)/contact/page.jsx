import React from 'react'
import Styles from './contact.module.css'

const page = () => {
  return (
    <div>
      <h1 className={Styles.h1}>Contact Us Page</h1>
      <div className={Styles.container}>
        <form action="" className={Styles.form}>
          <input className={Styles.input}  type="text" name="" placeholder='Full Name' id="" />
          <input className={Styles.input} type="email" name="" placeholder='E-mail' id="" />
          <input className={Styles.input} type="text" name="" placeholder='Message' id="" />
          <button className={Styles.btn}>Contact Us</button>
        </form>
        <div className={Styles.cssss}>
          <div>
            <h4 className={Styles.h4}>Contact</h4>
            <p>Ahmad@gmail.com</p>
          </div>
          <div>
            <h4 className={Styles.h4}>Base in</h4>
            <p>Lebanon, ketermaya</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
