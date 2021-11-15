import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import React, {createRef, useEffect,useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()
if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){var office_url = process.env.NEXT_PUBLIC_LOCAL_OFFICE_URL
}else{var office_url = process.env.NEXT_PUBLIC_LIVE_OFFICE_URL}

const ContactForm = () => {
  const [spinner, setspinner] = useState(false)
  const handleSubmitInterest = (e)=>{
    e.preventDefault()
    setspinner(true)
    //
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const state = e.target.state.value
    const whenInvest = e.target.whenInvest.value
    const message = e.target.message.value
    const data = {name,email,phone,state,whenInvest,message}
    // const check = Object.keys(data).map(key => {
    //   if(data[key] == "") {
    //      return toast.error(`${data[key]} is needed to continue!`)
    //   }else{
    //     return 'good'
    //   }
    // })
    
    // console.log(check,'check')
    
    simpleHttp.post('/api/propertyInvestInterest',data)
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
       e.target.whenInvest.value = ''
       return toast.info('Interest Form submited successfully!') 
    })
    .catch((e)=>{
       return toast.error('An error occurred, please check internet connection, refresh and try again') 
    })
    }

    return ( 
    <>
 <div className="grid md:grid-cols-2 gap-6 md:mx-20 mx-4 mt-20">
            <div className=" grid grid-cols-1 ">
            <div className=" grid md:text-left " >
    <h6 className="font-bold text-4xl text-black ">Interest Form
     </h6>
     <p className="text-brandGreen md:text-justify text-lg md:pr-10">Go ahead and fill the interest form and a Rep will be in touch with you immediately.</p>
     </div>
     <div className=" flex justify-center">
     <img src="/images/interestForm.png" className="w-52 h-52 place-self-center"/>
     </div>
    
 
            </div>
<div className="">
         
       
<form className="" onSubmit={handleSubmitInterest}>
  <div className="flex flex-wrap  mb-2">
    <div className="w-full md:w-1/2 px-1 mb-2 md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 md:mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name" name="name" required/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" name="email" required/>
    </div>
  </div>
  <div className="flex flex-wrap   ">
    <div className="w-full md:w-1/2 px-1 mb-2 ">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 md:mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Phone Number" name="phone" required/>

    </div>
    <div className="w-full md:w-1/2 px-1 mb-2">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="State" name="state" required/>
    </div>
  </div>

  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
  
    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Do you want to invest immediately?" name="whenInvest" required/>

    </div>
  </div>
 
  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
  
      <textarea className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Drop your concerns & enquiries here" name="message" required></textarea>

    </div>
  </div>
  <div className="flex flex-wrap  mb-3 md:items-center">
    <div className="pl-1 w-full ">
      <button className="shadow w-full md:w-2/6 flex justify-center bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2  rounded bg-brandGreen  " type="submit">
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
    </> );
}
 
export default ContactForm;