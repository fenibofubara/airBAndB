const Banner = () => {
    return ( 
        <>
       
            <div className="flex flex-wrap justify-center bg-authBanner bg-no-repeat border-b border-gray-300">
            <div className="border-gray-500 mx-4   rounded-md shadow-md mb-10 mt-10 pb-10 px-6 bg-white md:w-1/2  z-20">
            <div className="grid justify-center my-4">
            <img src="/images/logo.png"/>
            <span className="text-brandGreen font-semibold">Register</span>
            </div>
            <form className="">
  <div className="flex flex-wrap  mb-2">
    <div className="w-full md:w-1/2 px-1  md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Username"/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Password"/>
    </div>
  </div>
  <div className="flex flex-wrap  mb-2 ">
    <div className="w-full md:w-1/2 px-1 md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name"/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"/>
    </div>
  </div>

  <div className="flex flex-wrap  mb-2 ">
    <div className="w-full md:w-1/2 px-1  md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Email"/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Mobile"/>
    </div>
  </div>
 
  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
    <select name="cars" id="cars" className="w-full py-3  rounded-md border border-gray-400  focus:border-gray-500 bg-white  mb-4">
  <option value="">Select Country</option>
  <option value="nigeria">Nigeria</option>
  <option value="ghana">Ghana</option>
  <option value="southafrica">South Africa</option>
  <option value="amarica">America</option>
</select>
<span className="">By registering you agree to have read our <span className="md:p-2 mt-8 border-red-700 text-red-700 rounded-md border-2 cursor-pointer">Terms & Condition</span></span>
    <div className="pl-1 mt-4">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded bg-brandGreen w-full" type="button">
        Register
      </button>
    
    </div>
    <span className="flex justify-center w-full">Already have an account? <a href="#" className="text-brandGreen px-2">Login</a></span>

    </div>
  </div>

</form>
            </div>
            </div>
            

        </>
     );
}
 
export default Banner;