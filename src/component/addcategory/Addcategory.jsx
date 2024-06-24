import React , { useState }from 'react'
import Styles from './addcategory.module.css'

const Addcategory = ({isVisible, onClose }) => {
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleclose = (e) => {
        e.preventDefault();
        onClose();
        // const container = document.querySelector(`.${Styles.container}`);
        // if (container) {
        //     container.style.display = 'none'; // Hide the container initially
        // }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await fetch('/api/category', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ img, title}),
          });
    
          const data = await res.json();
    
          if (data.success) {
            setMessage('Data inserted successfully!');
            setImg('');
            setTitle('');
          } else {
            setMessage('Error inserting data: ' + data.message);
          }
        } catch (error) {
          console.error(error);
          setMessage('Errors inserting data');
        }
    };
    

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
    
                <h2 className={Styles.h2}>Add Category</h2>
                <form action="" onSubmit={handleSubmit} id="form">
                    <div>
                        <input type="file" value={img} onChange={(e) => setImg(e.target.value)} 
                             className={Styles.fileInput} id="fileInput" name="image" required />
                    </div>
    
                    <div>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} 
                            className={Styles.title} name="title_category" required/>
                    </div>
    
                    <button type="submit" name="add-category" className={Styles.btnAdd}>Add</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
      );
  }else {
    return <></>;
  }
}

export default Addcategory
