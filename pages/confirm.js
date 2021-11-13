import Head from 'next/head'
import EasyHTTP from '../helpers/easyHttp'
import { ToastContainer, toast } from 'react-toastify';
import React, {createRef, useEffect,useState} from 'react';
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
const simpleHttp =  new EasyHTTP()


if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){var office_url = process.env.NEXT_PUBLIC_LOCAL_OFFICE_URL
}else{var office_url = process.env.NEXT_PUBLIC_LIVE_OFFICE_URL}



export default function Confirmation() {
const [spinner, setspinner] = useState(false)

const handleRegistration = (e)=>{
     setspinner(true)
  e.preventDefault()
  var urlParams = new URLSearchParams(window.location.search)
  var emailConfirmToken = urlParams.get('')
  const data = {emailConfirmToken}
  console.log(emailConfirmToken,'emailConfirmToken')
  simpleHttp.post('/api/reg',data)
      .then((response)=> {
        if(response.error){
             setspinner(false)
             return toast.error(response.error)
        } else { 
             if(response.profileToken){
                  window.location.href = `${office_url}/?pass=${JSON.stringify(response.profileToken)}`;
             }
        } 
  })
  .catch((e)=>{
   return toast.error('An error occurred, please check internet connection, refresh and try again')
})
}
  return (
  
  <>
     <Head>
        <title>Property Trade | Confirmation</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner" className="md:mx-pfx mx-4">

    <div className="mt-32 flex justify-center">
    <div className="md:w-2/5 border-1 shadow-md px-4 py-8 rounded-md ">
    <div className=" flex justify-center"><img src='/images/logo.png' /></div>
    
        <span>Please click on the botton below to confirm your email</span>
        <div className="btn text-white bg-brandGreen" onClick={handleRegistration}>
      {spinner && <i className='fa fa-spinner fa-spin'></i>}
      {spinner && ' Confirming'}
      {!spinner && 'Confirm Mail'}</div>
    </div>
       
    </div>
    
    </section>
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


    
  )
}
