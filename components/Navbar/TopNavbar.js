import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'






const TopNavbar = ()=>{

const [menuOpen, setMenuOpen] = useState(0)

const handleOpenMenu = (e)=>{
  e.preventDefault()
  if(menuOpen == 0){setMenuOpen(1)}
  if(menuOpen == 1){setMenuOpen(0)}
  }
    return(
       <>
<header className="flex   relative">
 
    <nav className="flex justify-between bg-white text-gray-500  shadow-md w-full">
      <div className="px-5 xl:px-3  flex w-full items-center">
        <a className=" pt-4" href="#">
           <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
        </a>
   
        <ul className="hidden md:flex mx-auto font-heading  ">
          <li><a className="hover:text-gray-700 mx-3" href="#">Home</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#propertyTrade">Property Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#propertyInvest">DEFI-Staking Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#defi">Crypto-Bot Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#cryptoBot">PFX-Apss</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="pfxAffiliate">Affiliate Program</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#">PFX Mall</a></li>
          <li><a className="hover:text-gray-700 ml-3" href="#contact">Contact</a></li>
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
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#" onClick={handleOpenMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brandYellow hover:text-brandGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
</svg>
      </a>
    </nav>
{menuOpen && (
  <div className="bg-white w-full shadow-md md:hidden">
    <ul className="md:flex mx-auto font-heading font-semibold text-gray-500 ">
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2 hover:text-white"><a className="mx-3" href="#">Home</a></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><a className="mx-3" href="#">Property Trade</a></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><a className="mx-3" href="#">DEFI-Staking Trade</a></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><a className="mx-3" href="#">Crypto-Bot Trade</a></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><a className=" mx-3" href="#">PFX-Apss</a></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><a className="mx-3" href="#">Affiliate Program</a></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><a className="mx-3" href="#">PFX Mall</a></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><a className="ml-3" href="#">Contact</a></li>
        </ul>
    
  </div>
)}

    
 
  </header>




       </>
    )
}

export default TopNavbar