import Image from 'next/image'
import Link from 'next/link'
const Banner = () => {
    return ( 
        <>
       
            <div className="flex flex-wrap justify-center bg-authBanner border-b  border-gray-300 ">
          
            {/* absolute top-6  */}
            <div className=" border-gray-500   rounded-md shadow-md mb-40 mt-10 pb-10 px-6 bg-white md:w-1/3  z-20">
            <div className="grid justify-center my-4">
            <img src="/images/logo.png" />
            <span className="text-brandGreen font-semibold">Login</span>
            </div>
            <form className="">
  <div className="flex flex-wrap  mb-2">
    <div className="w-full  px-1 mb-6 md:mb-0">
     
      <input className="appearance-none  w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white   focus:border-brandGreen" id="grid-first-name" type="text" placeholder="Email"/>
    
    </div>

  </div>
  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
    <input className="appearance-none  w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-brandGreen mb-4" id="grid-last-name" type="text" placeholder="Password"/>
    <span className="flex justify-start"><Link href='/resetPassword'>Forgot Password?</Link></span>
    <div className="pl-1 mt-4">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 rounded bg-brandGreen w-full" type="button">
        Login
      </button>
    
    </div>
    <span className="flex justify-center w-full">Don't have an account? <Link href="/register" >Register</Link></span>

    </div>
  </div>

</form>
            </div>
            </div>
            

        </>
     );
}
 
export default Banner;