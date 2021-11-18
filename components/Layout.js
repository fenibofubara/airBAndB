import Head from 'next/head';
import { useState,useEffect} from 'react';
import Footer from "../components/Footer/Footer"
import TopNavbar from "../components/Navbar/TopNavbar"
import { useRouter } from 'next/router'


const Layout = ({ children }) => {
const router = useRouter()
const whichPath = router.pathname
const noHeaderPaths = ['/register','/login','/passwordReset','/passwordForgot','/paymentConfirmation']
const check = noHeaderPaths.includes(whichPath)

useEffect(() => {
const queryURL = window.location.search;
const urlParams = new URLSearchParams(queryURL);
const referralToken = urlParams.get('wl');
console.log(referralToken)
localStorage.setItem('refToken', JSON.stringify(referralToken));
    
  
},[])

  


  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </Head>
      <div className="body">
      <div className="content" id="content">
      {check == false   && ( <TopNavbar/>)}
            {children}
        <Footer/>
      </div>
      </div>
    </>
  );
}

export default Layout;