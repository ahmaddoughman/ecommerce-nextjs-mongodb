import React , { useEffect, useState }from 'react'
import Styles from './addproducts.module.css'

const Addproducts = ({isVisible, onClose }) => {
    const [img, setImg] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const [message, setMessage] = useState('');

    const handleclose = (e) => {
        e.preventDefault();
        onClose();
    }

    const handleSubmits = async (e) => {
        e.preventDefault();
    
        try {
          const res = await fetch('/api/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ img, desc, price, category}),
          });
    
          const data = await res.json();
    
          if (data.success) {
            setMessage('Data inserted successfully!');
            setImg('');
            setDesc('');
            setPrice('');
            setCategory('');
          } else {
            setMessage('Error inserting data: ' + data.message);
          }
        } catch (error) {
          console.error(error);
          setMessage('Errors inserting data');
        }
    };


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
    

  if(isVisible){
    return (
        <div className={Styles.container}>
            <div className={Styles.main}>
                <p className={Styles.close} onClick={handleclose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </p>
    
                <h2 className={Styles.h2}>Add Products</h2>
                <form action="" onSubmit={handleSubmits} id="form">
                    <div>
                        <input type="file" value={img} onChange={(e) => setImg(e.target.value)} 
                             className={Styles.fileInput} id="fileInput" name="image" required />
                    </div>
    
                    <div>
                        <input type="text" placeholder="Desc" value={desc} onChange={(e) => setDesc(e.target.value)} 
                            className={Styles.title} name="desc" required/>
                    </div>

                    <div>
                        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} 
                            className={Styles.title} name="price" required/>
                    </div>

                    <div>
                        <select className={Styles.select} name="" id="" value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required>

                            <optgroup className={Styles.optgroup} label='Select Category'>
                                {categories.map((item, index) => (
                                    <option className={Styles.option} key={index} value={item.title}>{item.title}</option>
                                ))}
                            </optgroup>
                        </select>
                    </div>

    
                    <button type="submit" name="add-product" className={Styles.btnAdd}>Add</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
      );
  }else {
    return <></>;
  }
}

export default Addproducts
