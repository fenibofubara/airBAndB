import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import React, {createRef, useEffect,useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()
if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){var office_url = process.env.NEXT_PUBLIC_LOCAL_OFFICE_URL
}else{var office_url = process.env.NEXT_PUBLIC_LIVE_OFFICE_URL}


const Banner = () => {
  const [spinner, setspinner] = useState(false)
  const [show, setshow] = useState(true)

  const handleShow = (e)=>{
    e.preventDefault()
    if(show == true){setshow(false)}else{setshow(true)}
    
    
  }
const handleLogin = (e)=>{
setspinner(true)
e.preventDefault()
if(e.target.email.value == ''){
  return toast.error('Kindly enter email')
}
if(e.target.password.value == ''){
  return toast.error('Kindly enter Password')
}
const mail = e.target.email.value
const password = e.target.password.value
const data = {mail, password}

simpleHttp.post('/api/login',data)
.then((response)=>{
   if(response.error){
    setspinner(false)
     return toast.error(response.error) 
   }else{
     if(response.profileToken){
      setspinner(false)
      window.location.href = `${office_url}/?pass=${JSON.stringify(response.profileToken)}`;

     }
   } 
})
.catch((e)=>{
   console.log(e.message)
   return toast.error('An error occurred, please check internet connection, refresh and try again') 
})

}

    return ( 
        <>
       
            <div className="flex flex-wrap justify-center bg-authBanner border-b  border-gray-300 ">
          
            {/* absolute top-6  */}
            <div className=" border-gray-500   rounded-md shadow-md mb-40 mt-10 pb-10 px-6 bg-white md:w-1/3  z-20">
            <div className="grid justify-center my-4">
            <Link href='/'><a><img src="/images/logo.png"/></a></Link>
            
            <span className="text-brandGreen font-semibold">Login</span>
            </div>
            <form className="" onSubmit={handleLogin}>
  <div className="flex flex-wrap  mb-2">
    <div className="w-full  px-1 mb-6 md:mb-0">
     
      <input className="appearance-none  w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white   focus:border-brandGreen" id="grid-first-name" type="text" placeholder="Email" name='email' required/>
    
    </div>

  </div>
  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1 relative">
    <input className="appearance-none  w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brandGreen mb-4" id="grid-last-name" type={show ? 'password' : 'text'} placeholder="Password" name='password' required/>
    <div class="absolute top-3 right-0 pr-3 flex items-center text-sm leading-5">
    {show == true? <img src='/images/eyeOpen.png' onClick={handleShow}/>: null}
    {show == false?<img src='/images/eyeClose.png' onClick={handleShow}/>:null}



    </div>
    <span className="flex justify-start"><Link href='/passwordForgot'>Forgot Password?</Link></span>
    <div className="pl-1 mt-4">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded bg-brandGreen w-full" type="submit">
      {spinner && <i className='fa fa-spinner fa-spin'></i>}
      {spinner && ' Entering..'}
      {!spinner && 'Login'}
        
      </button>
    
    </div>
    <span className="flex justify-center w-full">Don't have an account? <Link href="/register" >Register</Link></span>

    </div>
  </div>

</form>
            </div>
            </div>

          <ToastContainer
      position="top-right"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />    

        </>
     );
}
 
export default Banner;


