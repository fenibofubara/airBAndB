import Link from 'next/link'
import EasyHTTP from '../../../helpers/easyHttp'
import React, {createRef, useEffect,useState,useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
const simpleHttp =  new EasyHTTP()
const Banner = () => {
const pack = useRef(null)
const packHeader = useRef('PROCCESSING CONFIRMATION')
const transactionRef = useRef('------------')


  useEffect(() => {
const queryURL = window.location.search;
const urlParams = new URLSearchParams(queryURL);
const status = urlParams.get('status');
const tx_ref = urlParams.get('tx_ref');
const type = urlParams.get('type')
const transaction_id = urlParams.get('transaction_id')
console.log(status, tx_ref, transaction_id,type)

if(type == 'activateConfirm'){
if (!(status && tx_ref && transaction_id)) {
      console.log('error')
 
      packHeader.current.innerHTML = '<span style="color: red;">Proccess Not Allowed</span>'
      setprocessState('Proccess Not Allowed')
      pack.current.innerHTML = '<p style="text-align: center; color: red; font-size: 30px;">Ooops!<p><p style="text-align: center; color: #212529;">Something went wrong confirming your payment</p>'
      return toast.error('Invalid url for payment confirmation!')
  }
  if(status == 'cancelled') {
      console.log('Failed')
 
      packHeader.current.innerHTML = '<span style="color: red;">Proccess Cancelled</span>'
      pack.current.innerHTML =
       '<p style="text-align: center; color: red; font-size: 30px;">Ooops!<p><p style="text-align: center; color: #212529;">The verification process was not successful, please try to make the paymet again or if you are sure there was an issue try contacting admin support with your transaction refrence</p>'
      return toast.error('Invalid url for payment confirmation!')
  }
  transactionRef.current.innerHTML = tx_ref;
  const data = {
      status, tx_ref, transaction_id
  }

  simpleHttp.post('/api/activateConfirmation', data)
      .then((response) => {
          console.log(response)
          if (response.error) {
              const pack = document.querySelector('#pack');
              const headerPay = document.querySelector('#header-pay')
              headerPay.innerHTML = '<span style="color: red;">Proccess Cancel</span>'
              pack.innerHTML = `<p style="text-align: center; color: red; font-size: 30px;">Ooops!<p>
              <p style="text-align: center;  color: #212529;">${response.error} <br> if you are sure there was an issue try contacting admin support with your transaction refrence.</p>`

        
              return toast.error(response.error)
          } else {
              console.log(response)
            
              packHeader.current.innerHTML = '<span style="color: #346230;">Payment Comfirmation Complete</span>'
              pack.current.innerHTML = `
              <img src="images/success.png" id="payment-preload"
              class="img-fluid mx-auto d-block" style="height: 70px">
              <p style="text-align: center; color: #346230; font-size: 30px;">Hurray!<p>
              <p style="text-align: center;  color: #212529;">You can now close this page and continue exploring, Cheers...</p>
              `
                setTimeout(() => {
                  window.location.href = `https://office.pfxnet.com`;
              }, 3000);
          }
      })
      .catch((e) => {
          console.log(e.message)
       
          packHeader.current.innerHTML = '<span style="color: red;">Proccess Cancel</span>'
          pack.current.innerHTML = '<p style="text-align: center; color: red; font-size: 30px;">Ooops!<p><p style="text-align: center;  color: #212529;">Something went wrong confirming your payment, please try contacting admin support with your transaction refrence.</p>'
          return toast.error('An error occurred, please check internet connection, refresh and try again')
       
      })



}

if(type == 'poolConf'){
  // ======== Confirm addition to pool via flutterwave
 
     if (!(status && tx_ref && transaction_id)) {
         console.log('error')
       
         packHeader.current.innerHTML = '<span style="color: red;">Proccess Not Allowed</span>'
         pack.current.innerHTML = '<p style="text-align: center; color: red; font-size: 30px;">Ooops!<p><p style="text-align: center; color: #212529;">Something went wrong confirming your payment</p>'
       
         return toast.error('Invalid url for payment confirmation!')
     }
     if(status == 'cancelled') {
         console.log('Failed')
      
         packHeader.current.innerHTML = '<span style="color: red;">Proccess Cancelled</span>'
         pack.current.innerHTML =
          '<p style="text-align: center; color: red; font-size: 30px;">Ooops!<p><p style="text-align: center; color: #212529;">The verification process was not successful, please try to make the paymet again or iif you are sure there was an issue try contacting admin support with your transaction refrence</p>'
  
         return toast.error('Invalid url for payment confirmation!')
     }
     transactionRef.current.innerHTML = tx_ref;
     const data = {
         status, tx_ref, transaction_id
     }
 
     simpleHttp.post('/api/confirmAddToPoolViaFlutterwave', data)
         .then((response) => {
             console.log(response)
             if (response.error) {
               
                 packHeader.current.innerHTML = '<span style="color: red;">Proccess Cancel</span>'
                 pack.current.innerHTML = `<p style="text-align: center; color: red; font-size: 30px;">Ooops!<p>
                 <p style="text-align: center;  color: #212529;">${response.error} <br> if you are sure there was an issue try contacting admin support with your transaction refrence.</p>`

                 return toast.error(response.error)
             } else {
                 console.log(response)
                 packHeader.current.innerHTML = '<span style="color: #346230;">Payment Comfirmation Complete</span>'
                 pack.current.innerHTML = `
                 <img src="images/success.png" id="payment-preload"
                 class="img-fluid mx-auto d-block" style="height: 70px">
                 <p style="text-align: center; color: #346230; font-size: 30px;">Hurray!<p>
                 <p style="text-align: center;  color: #212529;">You can now close this page and continue exploring, Cheers...</p>
                 `
                   setTimeout(() => {
                     window.location.href = `https://office.pfxnet.com`;
                 }, 3000);
             }
         })
         .catch((e) => {
             console.log(e.message)
             packHeader.current.innerHTML = '<span style="color: red;">Proccess Cancel</span>'
             pack.current.innerHTML = '<p style="text-align: center; color: red; font-size: 30px;">Ooops!<p><p style="text-align: center;  color: #212529;">Something went wrong confirming your payment, please try contacting admin support with your transaction refrence.</p>'
     
             return toast.error('An error occurred, please check internet connection, refresh and try again')
        
         })
 
 

 }
  
  }, [])


    return ( 
        <>
       
            <div className="bg-gray-200  bg-otherBackGround h-full  bg-cover flex justify-center">
            {/* <img src="/images/bannerRegister.png" className="h-screen border-b border-gray-300"/> */}
            <div className="md:mx-80  border-gray-500  rounded-md shadow-md py-12 px-6 bg-white md:w-1/3  z-20">
            <div className="grid justify-center mt-4">
            
            <Link href='/'><a><img src="/images/logo.png"/></a></Link>
            </div>
            <div className="grid justify-center">
            <span className="text-brandGreen font-semibold uppercase " ref={packHeader}>PROCCESSING CONFIRMATION</span>
             <div ref={pack}>
             <span className="text-brandGreen py-6">Flutterwave Payment</span>
            <div className="grid justify-center mt-4 text-brandGreen">
            <img src="/images/preloader.gif" className=" fill-current text-brandGreen bg-brandGreen"/>
            </div>
            <span className="text-brandGreen"><span className="text-red-600">Importanat Note:</span> Please do not close this page until a payment confirmation or a further step to confirm payment is shown to you, Thank you...</span>
             </div>
            <h1 className="font-semibold py-2">Transaction Reference Number</h1>
            </div>
            <form className="">

  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
    <input className="appearance-none block  w-full bg-white text-gray-700 border border-gray-400 rounded py-3 md:px-40 text-center leading-tight focus:outline-none focus:bg-white focus:border-brandGreen mb-10" id="grid-last-name" type="text" placeholder="-----" ref={transactionRef}/>
    <span className="text-brandGreen ">
    if there is an issue with payment confimation, please copy transaction reference number and send a message to admin support, we sincerely appologize for any inconvenience you may have encountered.
    </span>
   
  


    </div>
  </div>

</form>
            </div>
            </div>
            

        </>
     );
}
 
export default Banner;