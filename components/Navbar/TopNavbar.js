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

<header className="flex relative justify-between bg-white text-gray-500  shadow-md w-full">
      <div className="px-5 xl:px-3  flex w-full items-center justify-evenly">
        <a className=" pt-4" href="#">
           <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
        </a>
   
        <ul className="hidden lg:flex mx-auto font-heading  ">
          <li><a className="hover:text-gray-700 mx-3" href="propertyInvest">Home</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#propertyTrade">Property Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#propertyInvest">DEFI-Staking Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#defi">Crypto-Bot Trade</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#cryptoBot">PFX-Apss</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="pfxAffiliate">Affiliate Program</a></li>
          <li><a className="hover:text-gray-700 mx-3" href="#">PFX Mall</a></li>
          <li><a className="hover:text-gray-700 ml-3" href="#contact">Contact</a></li>
        </ul>
       
        <div className=" flex  md:items-center md:space-x-1 md:mr-5 md:ml-5">
        <div className="text-brandGreen cursor-pointer md:border border-brandGreen  md:hover:bg-brandGreen md:hover:text-white ml-4 md:font-semibold md:py-3 md:px-8 md:rounded-md  md:text-xs md:tracking-wider"><a href="login">Login</a></div>
        <div className="text-brandGreen cursor-pointer md:border border-brandGreen  md:hover:bg-brandGreen md:hover:text-white ml-4 md:font-semibold md:py-3 md:px-8 md:rounded-md  md:text-xs md:tracking-wider"><a href="login">Register</a></div>
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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brandYellow hover:text-brandGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
</svg>
      </a>
    </header>
 
{menuOpen == '1' && (
  <div className="bg-white w-screen shadow-md lg:hidden">
  <ul className="md:flex mx-auto font-heading font-semibold text-gray-500  ">
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2 hover:text-white "><a className="mx-3" href="#">Home</a></li>
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

  
       </>
    )
}

export default TopNavbar