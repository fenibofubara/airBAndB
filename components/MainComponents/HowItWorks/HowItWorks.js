const HowItWorks = () => {
    return ( 
    <>
    <div className="py-4">
    <h6 className="uppercase  font-bold text-4xl text-center block text-black">How it works<span className="block"></span>
     </h6>
     <p className="px-80 font-semibold text-brandGreen">Visit any vendor of your choice to price your desired product</p>
    </div>

    <div className="bg-howVector h-80 bg-no-repeat  py-8">
      <span className="grid grid-cols-4 gap-8 mx-10 py-4" >
      <span>
      <div className="bg-brandBoxBlue rounded-lg py-8 px-4 text-brandGreen transform  hover:translate-x-4 hover:translate-y-4  hover:shadow-inner hover:bg-opacity-95 ">
        Give us the current quotation (Price) with detailed description of the product and the
seller’s phone number for price verification.
        </div>
        <span className="text-brandYellow font-semibold ">Step 1</span>
      </span>
      <span>
      <div className="bg-brandBoxBlue rounded-lg py-8 px-4 text-brandGreen transform  hover:translate-x-4 hover:translate-y-4  hover:shadow-inner hover:bg-opacity-95 ">
      Deposit 65% of the amount with us
        </div>
        <span className="text-brandYellow font-semibold">Step 2</span>
      </span>
      <span>
      <div className="bg-brandBoxBlue rounded-lg py-8 px-4 text-brandGreen transform  hover:translate-x-4 hover:translate-y-4  hover:shadow-inner hover:bg-opacity-95 ">
      Massive cut-off of 35% for all products
        </div>
        <span className="text-brandYellow font-semibold ">Step 3</span>
      </span>
      <span>
      <div className="bg-brandBoxBlue rounded-lg py-8 px-4 text-brandGreen transform  hover:translate-x-4 hover:translate-y-4  hover:shadow-inner hover:bg-opacity-95 ">
      Receive your product / item after 90 working days from the date of initial deposit
payment with free delivery to your door step
        </div>
        <span className="text-brandYellow font-semibold ">Step 4</span>
      </span>
   
      </span>
  
        
    </div>
    </> );
}
 
export default HowItWorks;