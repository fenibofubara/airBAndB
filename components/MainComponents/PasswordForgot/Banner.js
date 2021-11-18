import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import React, {createRef, useEffect,useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../helpers/easyHttp'
import Link from 'next/link'
const simpleHttp =  new EasyHTTP()

const Banner = () => {
const [spinner, setspinner] = useState(false)


const handlePasswordForgot = (e)=>{
e.preventDefault()
setspinner(true)

const myMail =e.target.myemail.value
const data={ mail: myMail}
simpleHttp.put('/api/passwordForgot',data)
.then((response)=>{
     if(response.error){
      setspinner(false)
     return toast.error(response.error) 
     }
     e.target.myemail.value = ''
     setspinner(false)
     return toast.info(response.message) 
})
.catch((e)=>{
     return toast.error('An error occurred, please check internet connection, refresh and try again') 
 })
}
    return ( 
        <>
       
            <div className="flex flex-wrap justify-center bg-authBanner bg-no-repeat border-b border-gray-300">
           
            <div className="border-gray-500 mx-4   rounded-md shadow-md mb-40 mt-20 pb-10 px-6 bg-white md:w-1/2  z-20">
            <div className="grid justify-center mt-4">
            <Link href='/'><a><img src="/images/logo.png"/></a></Link>
            </div>
            <div className="grid justify-center mb-4 ">
            <span className="text-brandGreen font-semibold">Reset Password</span>
            </div>
  <form className="" onSubmit={handlePasswordForgot}>

  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brandGreen mb-4" id="grid-last-name" type="text" placeholder="Email" name='myemail'/>
   
    <div className="pl-1 mt-4">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded bg-brandGreen w-full" type="submit">
        
        {spinner && <i className='fa fa-spinner fa-spin'></i>}
      {spinner && ' Submiting'}
      {!spinner && 'Submit'}
      </button>
    
    </div>


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