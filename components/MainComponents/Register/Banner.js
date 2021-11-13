import Link from 'next/link'
import EasyHTTP from '../../../helpers/easyHttp'
import React, {createRef, useEffect,useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
const simpleHttp =  new EasyHTTP()
let referrerUserId

const Banner = () => {
  const router = useRouter()
  const [spinner, setspinner] = useState(false)
  const [usernameNote, setusernameNote] = useState('')
  const[useremailNote,setuseremailNote] = useState('')
  const handleRegister = (e)=>{
    e.preventDefault()
    setspinner(true)
    
    // const theReferralsUserId = router.asPath.slice(15)
    var urlParams = new URLSearchParams(window.location.search)
    referrerUserId = urlParams.get('ref') || false;
    
  
    if(referrerUserId) {}else {
  
      var refToken = localStorage.getItem('refToken');
      console.log(refToken,'refToken')
      if(refToken !=='null'){
          const referralToken=JSON.parse(refToken)
          console.log(referralToken)
          referrerUserId = referralToken;
      }
      if(refToken == 'null'){
          referrerUserId = 'PFX-MAIN';  
          console.log('pfxmain')
     
      }
      }
  
   const username =  e.target.username.value
   const password =  e.target.password.value
   const firstname =  e.target.firstname.value
   const lastname =  e.target.lastname.value
   const mail =  e.target.email.value
   const phone =  e.target.phone.value
   const country =  e.target.country.value
   //referrerUserId
   const data ={username,password,firstname,lastname,mail,phone,country,referrerUserId}
   simpleHttp.post('/api/pre-reg', data)
   .then((response) => {
        if (response.error) {
          setspinner(false)
          return toast.error(response.error)
        }
        else {
          e.target.username.value = ''
          e.target.password.value = ''
          e.target.firstname.value = ''
          e.target.lastname.value = ''
          e.target.email.value = ''
          e.target.phone.value = ''
          e.target.country.value = ''
          setspinner(false)
          return toast.info(response.message)
        }
   })

  
  }

  const checkUsername = (e)=>{
   const username =  e.target.value
    const data = {username}
    simpleHttp.post('/api/checkUsername', data)
     .then((response)=>{
        if(response.error){
          setusernameNote('Username is taken')
        }else{
          setusernameNote('Username is available ')
        } 
     })
     .catch((e)=>{
        return toast.error('An error occurred trying to verify user availabiity, please check internet connection, refresh and try again')
    })
  }

  const checkEmail = (e)=>{
    const email =  e.target.value
     const data = {email}
     simpleHttp.post('/api/checkMail', data)
      .then((response)=>{
         if(response.error){
           setuseremailNote('Email account is taken ')
         }else{
          setuseremailNote('Email account is available ')
         } 
      })
      .catch((e)=>{
         return toast.error('An error occurred trying to verify user email availabiity, please check internet connection, refresh and try again')
     })
   }
  //
    return ( 
        <>
       
            <div className="flex flex-wrap justify-center bg-authBanner bg-no-repeat border-b border-gray-300">
            <div className="border-gray-500 mx-4   rounded-md shadow-md mb-10 mt-10 pb-10 px-6 bg-white md:w-1/2  z-20">
            <div className="grid justify-center my-4">
            <img src="/images/logo.png"/>
            <span className="text-brandGreen font-semibold">Register</span>
            </div>
  <form className="" onSubmit={handleRegister} >
  <div className="flex flex-wrap  mb-2">
    <div className="w-full md:w-1/2 px-1  md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Username" name="username" onKeyUp={(e)=>checkUsername(e)} />
      <span className="text-brandGreen flex">{usernameNote}</span>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Password" name="password"/>
    </div>
  </div>
  <div className="flex flex-wrap  mb-2 ">
    <div className="w-full md:w-1/2 px-1 md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" name="firstname"/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" name="lastname"/>
    </div>
  </div>

  <div className="flex flex-wrap  mb-2 ">
    <div className="w-full md:w-1/2 px-1  md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email" name="email" onKeyUp={(e)=>checkEmail(e)}/>
      <span className="text-brandGreen flex">{useremailNote}</span>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Mobile" name="phone"/>
    </div>
  </div>
 
  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
    <select name="cars" id="cars" className="w-full py-3  rounded-md border border-gray-400  focus:border-gray-500 bg-white  mb-4" name="country">
  <option value="">Select Country</option>
  <option value="nigeria">Nigeria</option>
  <option value="ghana">Ghana</option>
  <option value="southafrica">South Africa</option>
  <option value="amarica">America</option>
</select>
<span className="">By registering you agree to have read our <span className="md:p-2 mt-8 border-red-700 text-red-700 rounded-md border-2 cursor-pointer"><Link href='terms'>Terms & Condition</Link></span></span>
    <div className="pl-1 mt-4">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded bg-brandGreen w-full" type="submit" >
      {spinner && <i className='fa fa-spinner fa-spin'></i>}
      {spinner && ' Registering'}
      {!spinner && 'Register'}
      </button>
    
    </div>
    <span className="flex justify-center w-full">Already have an account? <Link href="/login">Login</Link></span>

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