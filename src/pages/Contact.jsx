import React, { useRef, useState } from 'react'
import '../styles/Contact.css'
import {motion, useInView} from 'framer-motion'
import emailjs from '@emailjs/browser';


const Contact = () => {

    const ref = useRef()
    const formRef = useRef()
    const [error,setError] = useState(false)
    const [success, setSuccess] = useState(false)
   



    const isInView = useInView(ref, {margin:'-100px'})

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4oqv7qi', 'template_wqdcl2e', formRef.current, 'GmNFNtc4i_poe5Bhi')
          .then((result) => {
            setSuccess(true)
          }, (error) => {
            setError(true)
              console.log(error.text);
          });
      };
  return (
    <div className='contact'>
        <div className='textContainer'>
        <h2>Hello..!</h2>
        <h1>Let's work together</h1>
        <div className='item'>
            <h3>Email Me:</h3>
            <span>dayanavillacis07@gmail.com</span>
            </div>
        </div>
        <div className='formContainer'>
            <motion.div 
            ref={ref}
            className='phoneSvg'
            initial={{opacity:1}} 
            whileInView={{opacity:0}} 
            transition={{ delay:2, duration: 1}}>

                <svg className='phone'fill="#33333" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="call-phone-heart-love-valentine">
                     <motion.path
                     strokeWidth={0.2}
                     fill='rgba(97, 73, 44, 0.726)'
                     initial={{pathLength:0}}
                     animate={isInView && {pathLength:1}}
                     transition={{delay:5, duration: 2}}
                      d="M332.094,437.633c-58.379-24.099-110.761-59.284-154.602-103.125S98.466,238.285,74.367,179.906 c-6.166-14.878,0.114-32.018,14.199-39.881l27.209-15.104l21.157-11.767c15.952-8.825,36.034-2.659,44.18,13.634l19.969,39.994 c6.222,12.332,3.79,27.209-5.94,36.939l-24.211,24.211c15.556,21.892,32.923,42.426,51.817,61.32s39.428,36.26,61.32,51.817 l24.211-24.211c9.73-9.73,24.607-12.162,36.939-5.94l39.994,19.969c16.292,8.146,22.458,28.228,13.634,44.18l-11.767,21.157 l-15.104,27.209C364.111,437.519,346.971,443.799,332.094,437.633z M360.203,255.977c4.406-0.336,7.703-4.18,7.367-8.586 c-4.156-54.539-48.422-98.805-102.961-102.961c-4.559-0.398-8.25,2.961-8.586,7.367s2.965,8.25,7.367,8.586 c46.734,3.563,84.664,41.492,88.227,88.227c0.32,4.195,3.828,7.391,7.969,7.391C359.789,256,359.992,255.992,360.203,255.977z M320.438,255.938c4.391-0.547,7.492-4.547,6.945-8.93c-4.094-32.641-29.75-58.297-62.391-62.391 c-4.355-0.523-8.383,2.563-8.93,6.945c-0.551,4.383,2.559,8.383,6.941,8.93c25.371,3.188,45.316,23.133,48.504,48.5 c0.508,4.047,3.953,7.008,7.93,7.008C319.766,256,320.102,255.977,320.438,255.938z M281.211,255.539 c4.156-1.484,6.328-6.063,4.852-10.227c-3.242-9.078-10.305-16.141-19.383-19.375c-4.156-1.477-8.734,0.688-10.215,4.859 c-1.484,4.156,0.691,8.734,4.852,10.219c4.527,1.609,8.059,5.133,9.668,9.672c1.172,3.273,4.25,5.313,7.539,5.313 C279.414,256,280.32,255.852,281.211,255.539z M433.376,85.024C420.961,68.863,397.847,67.782,384,81.78 c-13.847-13.998-36.961-12.917-49.376,3.245c-10.275,13.376-8.235,32.626,3.614,44.605l32.5,32.856 c7.318,7.398,19.204,7.398,26.522,0l32.5-32.856C441.611,117.651,443.651,98.4,433.376,85.024z"></motion.path> </g> <g id="Layer_1"></g> </g>
                      </svg>        
            </motion.div>

            <motion.form 
            ref={formRef}
            onSubmit={sendEmail}
            initial={{opacity:0}} 
            whileInView={{opacity:1}} 
            transition={{ delay:3, duration: 1}}
            >
                <input type="text" required placeholder='Name' name='name'/>
                <input type="text" required placeholder='Email' name='email'/>
                <textarea rows={8} placeholder='Message' name='message'/>
                <button>Submit</button>
                {error && 'Error'}
                {success && 'Success'}
            </motion.form>
        </div>
    </div>
  )
}

export default Contact