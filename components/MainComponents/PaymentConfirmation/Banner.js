const Banner = () => {
    return ( 
        <>
       
            <div className="bg-gray-200  bg-otherBackGround h-full  bg-cover flex justify-center">
            {/* <img src="/images/bannerRegister.png" className="h-screen border-b border-gray-300"/> */}
            <div className="md:mx-80  border-gray-500  rounded-md shadow-md py-12 px-6 bg-white md:w-1/3  z-20">
            <div className="grid justify-center mt-4">
            <img src="/images/logo.png" />
            </div>
            <div className="grid justify-center">
            <span className="text-brandGreen font-semibold uppercase ">PROCCESSING CONFIRMATION</span>
            <span className="text-brandGreen py-6">Flutterwave Payment</span>
            <div className="grid justify-center mt-4 text-brandGreen">
            <img src="/images/preloader.gif" className=" fill-current text-brandGreen bg-brandGreen"/>
            </div>
            <span className="text-brandGreen"><span className="text-red-600">Importanat Note:</span> Please do not close this page until a payment confirmation or a further step to confirm payment is shown to you, Thank you...</span>
            <h1 className="font-semibold py-2">Transaction Reference Number</h1>
            </div>
            <form className="">

  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
    <input className="appearance-none block  w-full bg-white text-gray-700 border border-gray-400 rounded py-3 md:px-40 text-center leading-tight focus:outline-none focus:bg-white focus:border-brandGreen mb-10" id="grid-last-name" type="text" placeholder="-----"/>
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