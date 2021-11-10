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
{/* relative  */}
<header className="flex justify-between bg-white text-gray-500  shadow-md w-full z-50 fixed ">
      <div className="px-5 xl:px-3  flex w-full items-center justify-evenly">
      <a className=" pt-4" href="/"><Image src="/images/logo.png" alt="logo" width={100} height={100}/>
      </a>
      
   
        <ul className="hidden lg:flex mx-auto font-heading  ">
     
          <li><Link href="/"><a className="hover:text-gray-700 mx-3">Home</a></Link></li>
          <li><Link href="/#propertyTrade"><a className="hover:text-gray-700 mx-3">Property Trade</a></Link></li>
          <li><Link href="/#propertyInvest"><a className="hover:text-gray-700 mx-3">DEFI-Staking Trade</a></Link></li>
          <li><Link href="/#cryptoBot"><a className="hover:text-gray-700 mx-3">Crypto-Bot Trade</a></Link></li>
          <li><Link href="/#pfxAffiliate"><a className="hover:text-gray-700 mx-3">PFX-Apss</a></Link></li>
          <li><Link href="/#affiliateProgram"><a className="hover:text-gray-700 mx-3">Affiliate Program</a></Link></li>
          <li><Link  href="/mall"><a className="hover:text-gray-700 mx-3">PFX Mall</a></Link></li>
          <li><Link href="/#contact"><a className="hover:text-gray-700 ml-3">Contact</a></Link></li>
      
        </ul>
       
        <div className=" flex  md:items-center md:space-x-1 md:mr-5 md:ml-5">
        <div className="text-brandGreen cursor-pointer md:border border-brandGreen  md:hover:bg-brandGreen md:hover:text-white ml-4 md:font-semibold md:py-3 md:px-8 md:rounded-md  md:text-xs md:tracking-wider"><Link href="login">Login</Link></div>
        <div className="text-brandGreen cursor-pointer md:border border-brandGreen  md:hover:bg-brandGreen md:hover:text-white ml-4 md:font-semibold md:py-3 md:px-8 md:rounded-md  md:text-xs md:tracking-wider"><Link href="register">Register</Link></div>
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
  <div className="bg-white w-screen shadow-md lg:hidden mt-32">
  <ul className="md:flex mx-auto font-heading font-semibold text-gray-500  ">
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2 hover:text-white "><Link href="#" className="mx-3" >Home</Link></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><Link href="#" className="mx-3" >Property Trade</Link></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><Link href="#" className="mx-3" >DEFI-Staking Trade</Link></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><Link href="#" className="mx-3" >Crypto-Bot Trade</Link></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><Link href="#" className="mx-3" >PFX-Apss</Link></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><Link href="#" className="mx-3" >Affiliate Program</Link></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><Link href="#" className="mx-3" >PFX Mall</Link></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white"><Link href="#" className="ml-3" >Contact</Link></li>
        </ul>
    
  </div>
)}

  
       </>
    )
}

export default TopNavbar