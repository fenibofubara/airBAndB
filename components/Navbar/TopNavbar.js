import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import * as Scroll from 'react-scroll';
let ReactLink      = Scroll.Link;






const TopNavbar = ()=>{
const router = useRouter()
const [menuOpen, setMenuOpen] = useState(0)
const [which, setWhich] = useState(true)

const handleOpenMenu = (e)=>{
  e.preventDefault()
  if(menuOpen == 0){setMenuOpen(1)}
  if(menuOpen == 1){setMenuOpen(0)}
  }

const handleAcademy = (e)=>{
    e.preventDefault()
    router.push('/academy')
    setWhich(false)
}

const handleMall = (e)=>{
    e.preventDefault()
    router.push('/mall')
    setWhich(false)
}

//

const handlepropertyTrade = (e)=>{
    e.preventDefault()
    router.push('/#propertyTrade')
    setWhich(true)
}
const handleDefi = (e)=>{
    e.preventDefault()
    router.push('/#defi')
    setWhich(true)
}
const handlecryptoBot = (e)=>{
    e.preventDefault()
    router.push('/#cryptoBot')
    setWhich(true)
}

const handlepfxAffiliate = (e)=>{
    e.preventDefault()
    router.push('/#pfxAffiliate')
    setWhich(true)
}
const handleaffiliateProgram = (e)=>{
    e.preventDefault()
    router.push('/#affiliateProgram')
    setWhich(true)
}

const handleSmallPTA = (e)=>{
  e.preventDefault()
  router.push('/academy')
  
}

const handleSmallMall = (e)=>{
  e.preventDefault()
  router.push('/mall')
  
}

//


//

    return(
       <>
{/* relative  */}
<header className="flex justify-between bg-white text-gray-500  shadow-md w-full z-50 fixed ">
      <div className="px-5 xl:px-3  flex w-full items-center justify-evenly">
      <a className=" pt-4" href="/"><img src="/images/logo.png" alt="logo"/>
      </a>
      
   
   {which === true?
    <ul className="hidden lg:flex mx-auto font-heading">
     <li className="nav-item"><ReactLink activeClass="active" to="banner" spy={true} smooth={true} offset={0} duration={2000}><a className="hover:text-gray-700 mx-3 cursor-pointer">Home</a></ReactLink></li>
     <li className="nav-item"><ReactLink activeClass="active" to="propertyTrade" spy={true} smooth={true} offset={-110} duration={2000}><a className="hover:text-gray-700 mx-3 cursor-pointer">Property Trade</a></ReactLink></li>
     <li className="nav-item"><ReactLink activeClass="active" to="defi" spy={true} smooth={true} offset={-40} duration={2000}><a className="hover:text-gray-700 mx-3 cursor-pointer">DEFI-Staking Trade</a></ReactLink></li>
     <li className="nav-item"><ReactLink activeClass="active" to="cryptoBot" spy={true} smooth={true} offset={-40} duration={2000} ><a className="hover:text-gray-700 mx-3 cursor-pointer">Crypto-Bot Trade</a></ReactLink></li>
     <li className="nav-item"><ReactLink activeClass="active" to="pfxAffiliate" spy={true} smooth={true} offset={-100} duration={2000}><a className="hover:text-gray-700 mx-3 cursor-pointer">Apss</a></ReactLink></li>
     <li className="nav-item"><ReactLink activeClass="active" to="affiliateProgram" spy={true} smooth={true} offset={-100} duration={2000}><a className="hover:text-gray-700 mx-3 cursor-pointer">Affiliate</a></ReactLink></li>
     <li onClick={handleAcademy}><Link href="/academy"><a className="hover:text-gray-700 ml-3">PTA</a></Link></li>
     <li onClick={handleMall}><Link  href="/mall"><a className="hover:text-gray-700 mx-3 cursor-pointer">Mall</a></Link></li>
     <li className="nav-item"><ReactLink activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={2000}><a className="hover:text-gray-700 ml-3 cursor-pointer">Contact</a></ReactLink></li>
   </ul>:null}


   {which === false?
    <ul className="hidden lg:flex mx-auto font-heading">
     <li className="nav-item"><Link href="/"><a className="hover:text-gray-700 mx-3 cursor-pointer">Home</a></Link></li>
     <li className="nav-item" onClick={handlepropertyTrade}><Link href="#"><a className="hover:text-gray-700 mx-3 cursor-pointer">Property Trade</a></Link></li>
     <li className="nav-item" onClick={handleDefi}><Link href="#"><a className="hover:text-gray-700 mx-3 cursor-pointer">DEFI-Staking Trade</a></Link></li>
     <li className="nav-item" onClick={handlecryptoBot}><Link href="#"><a className="hover:text-gray-700 mx-3 cursor-pointer">Crypto-Bot Trade</a></Link></li>
     <li className="nav-item" onClick={handlepfxAffiliate}><Link href="#"><a className="hover:text-gray-700 mx-3 cursor-pointer">Apss</a></Link></li>
     <li className="nav-item" onClick={handleaffiliateProgram}><Link href="#"><a className="hover:text-gray-700 mx-3 cursor-pointer">Affiliate</a></Link></li>
     <li onClick={handleAcademy}><Link href="/academy"><a className="hover:text-gray-700 ml-3">PTA</a></Link></li>
     <li onClick={handleMall}><Link  href="/mall"><a className="hover:text-gray-700 mx-3 cursor-pointer">Mall</a></Link></li>
     <li className="nav-item"><Link href="/#contact"><a className="hover:text-gray-700 ml-3 cursor-pointer">Contact</a></Link></li>
   </ul>:null}
       
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
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2 hover:text-white cursor-pointer "><ReactLink activeClass="active" to="banner" spy={true} smooth={true} offset={0} duration={2000} className="mx-3" >Home</ReactLink></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white cursor-pointer"><ReactLink activeClass="active" to="propertyTrade" spy={true} smooth={true} offset={-110} duration={2000} className="mx-3" >Property Trade</ReactLink></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white cursor-pointer"><ReactLink activeClass="active" to="defi" spy={true} smooth={true} offset={-50} duration={2000} className="mx-3" >DEFI-Staking Trade</ReactLink></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white cursor-pointer"><ReactLink activeClass="active" to="cryptoBot" spy={true} smooth={true} offset={-50} duration={2000} className="mx-3" >Crypto-Bot Trade</ReactLink></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white cursor-pointer"><ReactLink activeClass="active" to="pfxAffiliate" spy={true} smooth={true} offset={-100} duration={2000}  className="mx-3" >Apss</ReactLink></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white cursor-pointer"><ReactLink activeClass="active" to="affiliateProgram" spy={true} smooth={true} offset={-100} duration={2000}  className="mx-3" >Affiliate</ReactLink></li>
          <li onClick={handleSmallPTA} className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white cursor-pointer"><ReactLink className="mx-3" >PTA</ReactLink></li>
          <li onClick={handleSmallMall} className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white cursor-pointer"><ReactLink className="mx-3" >Mall</ReactLink></li>
          <li className="hover:bg-brandGreen flex py-2 text-center border-brandYellow border-b-2  hover:text-white cursor-pointer"><ReactLink activeClass="active" to="contact" spy={true} smooth={true} offset={-110} duration={2000}  className="ml-3" >Contact</ReactLink></li>
        </ul>
    
  </div>
)}

  
       </>
    )
}

export default TopNavbar