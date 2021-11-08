const Banner = () => {
    return ( 
        <>
       
            <div className="flex flex-wrap justify-center bg-authBanner bg-no-repeat border-b border-gray-300">
           
            <div className="border-gray-500 mx-4   rounded-md shadow-md mb-40 mt-20 pb-10 px-6 bg-white md:w-1/2  z-20">
            <div className="grid justify-center mt-4">
            <img src="/images/logo.png" />
            </div>
            <div className="grid justify-center mb-4 ">
            <span className="text-brandGreen font-semibold">Reset Password</span>
            </div>
            <form className="">

  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brandGreen mb-4" id="grid-last-name" type="text" placeholder="Email"/>
   
    <div className="pl-1 mt-4">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded bg-brandGreen w-full" type="button">
        Submit
      </button>
    
    </div>


    </div>
  </div>

</form>
            </div>
            </div>
            

        </>
     );
}
 
export default Banner;