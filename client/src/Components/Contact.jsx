import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios'


const Contact = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitBtn = (e) => {
    e.preventDefault();

    if(fullName !== '' && email !== '' && message != '') {
      
      axios.post('https://localhost:3000/users', {
        name : fullName,
        email : email,
        message : message
      })
      .then((res) => {
        console.log(res.data)
        toast.success("Message Sent");
        setFullName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error(err)
        toast.error("Failed to send message")
      })
    }


  }

  return (
    <motion.section 
    initial = {{opacity : 0, y : 80}}
    whileInView={{ opacity: 1, y : 0}}
    viewport={{once : true, amount : 0.2}}
    transition={{
      duration: 0.8,
      ease: "easeOut"
    }}
      id='Contact'
     className='min-h-screen flex items-center justify-center px-5 py-20 sm:px-6 lg:px-8 '>

      <div className='w-full lg:max-w-xl sm:max-w-sm animate-[fadeIn_0.8s_ease_in_out]'>

        <div className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_25px_#06d6a0]'>

          <h1 className='text-center font-bold text-2xl mb-2'>Contact Me</h1>

          <p className='text-center my-2 text-gray-700 italic'>Have a project in mind? Let's connect.</p>

          <div className='border w-full p-2 rounded-lg '>

          <form className='space-y-5' onSubmit={(e) => handleSubmitBtn(e)}>

              <div className='my-3 mx-6'>
              <input type="text" 
                     onChange={(e) => setFullName(e.target.value)} 
                     placeholder='Full Name'  autoComplete='off' 
                     value={fullName}
                     className='border outline-none transition-all duration-300
                     focus:border-[#06d6a0] w-full p-2 rounded-lg ' required />
              </div>

              <div className='my-3 mx-6'>
              <input type="email" 
                    onChange={(e) => setEmail(e.target.value)} placeholder='Email ID' 
                    autoComplete='off' 
                    value={email}
                    className='border w-full p-2 rounded-lg outline-none transition-all duration-300 focus:border-[#06d6a0]'  required/>
              </div>

              <div className='my-3 mx-6'>
                    <textarea onChange={(e) => {setMessage(e.target.value)}}
                    placeholder='Message' 
                    value={message}
                    className='border w-full p-2 rounded-lg outline-none transition-all duration-300 focus:border-[#06d6a0]' required ></textarea>
              </div>

              <div className='my-3 mx-6'>
              <input type="submit"  className='text-center w-full bg-[#06d6a0] py-1 font-thin rounded-md hover:cursor-pointer'/>
              </div>
          </form>

        </div>
      </div>
      </div>
      
    </motion.section>
  )
}

export default Contact
