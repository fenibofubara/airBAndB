import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import React, {createRef, useEffect,useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()
if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){var office_url = process.env.NEXT_PUBLIC_LOCAL_OFFICE_URL
}else{var office_url = process.env.NEXT_PUBLIC_LIVE_OFFICE_URL}

const Contact = () => {
const [spinner, setspinner] = useState(false)


const handleContactUs = (e)=>{
e.preventDefault()
setspinner(true)
const fullname = e.target.name.value
const email = e.target.email.value
const phone = e.target.phone.value
const country = e.target.state.value
const message = e.target.message.value

const data = {fullname,email,phone,country,message}
// const check = Object.keys(data).map(key => {
//   if(data[key] == "") {
//      return toast.error(`${data[key]} is needed to continue!`)
//   }else{
//     return 'good'
//   }
// })

// console.log(check,'check')

simpleHttp.post('/api/contactUs',data)
.then((response)=>{
   if(!response){
    setspinner(false)
    return toast.error(response) 
   } 
   setspinner(false)
   e.target.name.value = ''
   e.target.email.value = ''
   e.target.phone.value = ''
   e.target.state.value = ''
   e.target.message.value = ''
   return toast.info('Request submited successfully!') 
})
.catch((e)=>{
   return toast.error('An error occurred, please check internet connection, refresh and try again') 
})
}
    return ( 
        <>
            <div className="grid md:grid-cols-2 gap-6">
            <div className=" grid grid-cols-1 ">
            <div className=" grid md:text-left " >
    <h6 className="font-bold text-4xl text-black ">Contact Us
     </h6>
     <p className="text-brandGreen text-justify">Our help line is 24hrs open to receive any inquiry or feedback. Please feel free to drop us an email from the form below and we will get back to you as soon as we can</p>
     </div>
     <div className=" flex justify-center">
     <img src="/images/technical-support.png" className="w-52 h-52 place-self-center"/>
     </div>
    
 
            </div>
<div className="">
         
       
<form className="" onSubmit={handleContactUs}>
  <div className="flex flex-wrap  mb-2">
    <div className="w-full md:w-1/2 px-1  ">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" name="name" required/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" name="email" required/>
    </div>
  </div>
  <div className="flex flex-wrap  mb-2 ">
    <div className="w-full md:w-1/2 px-1 ">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Phone Number" name="phone" required/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="State" name="state" required/>
    </div>
  </div>
 
  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
  
      <textarea className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="message" name="message" required></textarea>

    </div>
  </div>
  <div className="flex flex-wrap  mb-3 md:items-center">
    <div className="pl-1 w-full md:w-auto">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 md:px-20 rounded bg-brandGreen w-full" type="submit">
      {spinner && <i className='fa fa-spinner fa-spin'></i>}
      {spinner && ' Submiting..'}
      {!spinner && 'Submit'}
        
      </button>
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
 
export default Contact;