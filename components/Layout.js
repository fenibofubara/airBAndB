import Head from 'next/head';
import { useState,useEffect} from 'react';
import Footer from "../components/Footer/Footer"
import TopNavbar from "../components/Navbar/TopNavbar"


const Layout = ({ children }) => {
const [state, setstate] = useState(0)
useEffect(() => {
    const path = window.location.pathname
    console.log(path,'pathhh')
    if(path == '/register'){setstate(1)}
    if(path == '/login'){setstate(1)}
    if(path == '/passwordReset'){setstate(1)}
    if(path == '/passwordForgot'){setstate(1)}
    if(path == '/paymentConfirmation'){setstate(1)}

const queryURL = window.location.search;
const urlParams = new URLSearchParams(queryURL);
const referralToken = urlParams.get('wl');
console.log(referralToken)
localStorage.setItem('refToken', JSON.stringify(referralToken));
    
  
}, [])

  


  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </Head>
      <div className="body">
      <div className="content" id="content">
      {state == '0' && ( <TopNavbar/>)}
            {children}
        <Footer/>
      </div>
      </div>
    </>
  );
}

export default Layout;