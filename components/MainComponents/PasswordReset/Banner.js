import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import React, {createRef, useEffect,useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../helpers/easyHttp'
import Link from 'next/link'
const simpleHttp =  new EasyHTTP()

if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){var login_url = process.env.NEXT_PUBLIC_LOCAL_WELCOME_URL
}else{var login_url = process.env.NEXT_PUBLIC_LIVE_WELCOME_URL}

const Banner = () => {

const [spinner, setspinner] = useState(false)
const handlePasswordReset = (e)=>{
e.preventDefault()
setspinner(true)

var urlParams = new URLSearchParams(window.location.search)
var token = urlParams.get('');

const newPassword = e.target.password1.value
const confirmPassword = e.target.password2.value

if(newPassword === "") {
    return toast.error('Password field is required!')
}
if(newPassword !== confirmPassword) {
    return toast.error('Your confirm password does not match!')
}
const data = {token, newPassword}

simpleHttp.put('/api/passwordReset', data)
.then((response)=>{
    if(response.error){
        setspinner(false)
        return toast.error(response.error)
    }
    toast.info(response.message) 
    setTimeout(() => {
        window.location.href = `${login_url}/login`;
    }, 3000);

})
.catch((e)=>{
    return toast.error('An error occurred, please check internet connection and try again') 
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
            <span className="text-brandGreen font-semibold">Enter New Password</span>
            </div>
  <form className="" onSubmit={handlePasswordReset}>

  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brandGreen mb-4" id="grid-last-name" type="password" placeholder="New Password" name='password1'/>

    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brandGreen mb-4" id="grid-last-name" type="password" placeholder="Confirm Password" name='password2'/>
   
    <div className="pl-1 mt-4">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded bg-brandGreen w-full" type="submit">
      {spinner && <i className='fa fa-spinner fa-spin'></i>}
      {spinner && 'Resetting'}
      {!spinner && 'Reset'}
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