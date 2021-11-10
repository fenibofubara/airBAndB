// import  "../../styles/layout.css"
import Link from 'next/link'
const Footer = () => {
    return ( 
        <>
        <footer className="pt-12 ">
     
        <div className="grid md:grid-cols-7  text-black ">
            <div className="flex justify-center  md:col-start-1 md:col-end-4  border-b border-brandYellow mb-4 "><img src="/images/logoFooter.png"/></div>
            <div className=" md:col-start-4 md:col-end-5  border-b border-brandYellow mb-4  ">
                <h1 className="font-semibold flex justify-start pb-3 text-brandGreen ">Quick Links</h1>
                <ul className="">
                    <li className="footer-item"><Link href='register'>Register</Link></li>
                    <li className="footer-item"><Link href='terms'>Terms & Conditions</Link></li>
                    <li className="footer-item"><Link href='refundPolicy'>Refund Policy</Link></li>
                    <li className="footer-item"><Link href='refundPolicy'>Refund Policy</Link></li>
                    <li className="footer-item"><Link href='earnings'>Earning Disclaimer</Link></li>
                    <li className="footer-item mb-4 md:mb-0"><Link href='privacy'>Privacy Policy</Link></li>

                </ul>
            </div>
            <div className=" md:col-start-5 md:col-end-8  border-b border-brandYellow mb-4 ">
            <h1 className="font-semibold text-brandGreen flex justify-start pb-3 ">Contact</h1>
            <div className="flex">
                <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brandYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></div>
                <div className="flex text-left pl-4 text-gray-400 pr-6 font-semibold">No 3 Azikiwe Road, 1st Floor, Former Pan Africa Building, Back of Unity Bank Beside Spar, Near Government House, Port Harcourt.</div>
            </div>

            <div className="flex mt-2 ">
                <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brandYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg></div>
                <div className="flex text-left pl-4 text-gray-400 pr-6 font-semibold">contact@pfxnet.com</div>
            </div>

            <div className="flex">
            <div className="h-6 w-6"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg></div>
               <div className="flex pl-4 pt-4 pb-4 md:pb-0">
               <div className=" relative px-2  border-2 rounded-full w-10 h-10 border-brandGreen cursor-pointer mr-2  ">
                <img src="/images/youtube.png" className="absolute right-1.5 w-6 top-1.5"/>
                </div>
                <div className=" relative px-2  border-2 rounded-full w-10 h-10 border-brandGreen cursor-pointer mr-2 ">
                <Link href="https://web.facebook.com/pfxnet"><img src="/images/fb.png" className="absolute right-1.5 w-6 top-1.5"/></Link>
                
                </div>
                <div className=" relative px-2  border-2 rounded-full w-10 h-10 border-brandGreen cursor-pointer mr-2 ">
                <Link href='https://www.twitter.com/pfxnet'><img src="/images/twitter.png" className="absolute right-1.5 w-6 top-1.5"/></Link>
                
                </div>
                <div className=" relative px-2  border-2 rounded-full w-10 h-10 border-brandGreen cursor-pointer mr-2 ">
                <img src="/images/instagram.png" className="absolute right-1.5 w-6 top-1.5"/>
                </div>
               </div>
            </div>
            </div>
        </div>
        <div className="flex w-full text-gray-400  py-2 md:py-0 justify-center bg-gray-100 rounded-sm">
            <span>©2021 PFXNET. All rights reserved</span>
        </div>
            
        </footer>
    
        </>
     );
}
 
export default Footer;