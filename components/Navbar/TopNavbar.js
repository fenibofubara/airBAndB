import Image from 'next/image'
import Link from 'next/link'
// import "../../styles/layout.css"


const TopNavbar = ()=>{
    return(
       <>
<header className="flex flex-wrap bg-gray-500 relative">
 
    <nav className="flex justify-between bg-white text-gray-500  shadow-md w-full">
      <div className="px-5 xl:px-3  flex w-full items-center">
        <a className="#" href="#">
           <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
        </a>
   
        <ul className="hidden md:flex mx-auto font-heading  ">
          <li><a className="hover:text-gray-700 mx-3" href="#">Home</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#">Property Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#">DEFI-Staking Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#">Crypto-Bot Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#">PFX-Apss</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#">Affiliate Program</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#">PFX Mall</a></li>
          <li><a className="hover:text-gray-700 ml-3" href="#">Contact</a></li>
        </ul>
       
        <div className="hidden xl:flex items-center space-x-1 mr-5 ml-5">
        <div className="text-brandGreen  btn hover:bg-brandGreen hover:text-white">Login</div>
        <div className="text-brandGreen btn hover:bg-brandGreen hover:text-white">Register</div>
     
          
        </div>
      </div>
    
      <a className="xl:hidden flex mr-6 items-center" href="#">
     
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-brandGreen opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brandGreen">
          </span>
        </span>
      </a>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brandGreen hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
    
 
  </header>




       </>
    )
}

export default TopNavbar