// import  "../../styles/layout.css"
const Footer = () => {
    return ( 
        <>
        <footer className="py-12">
        <div className="grid grid-cols-7  text-black ">
            <div className="flex justify-center  col-start-1 col-end-4 "><img src="/images/logoFooter.png"/></div>
            <div className=" col-start-4 col-end-5  ">
                <h1 className="font-semibold text-black flex justify-start pb-3 ">Quick Links</h1>
                <ul className="">
                    <li className="footer-item">Register</li>
                    <li className="footer-item">Terms & Conditions</li>
                    <li className="footer-item">Refund Policy</li>
                    <li className="footer-item">Refund Policy</li>
                    <li className="footer-item">Earning Disclaime</li>
                    <li className="footer-item">Privacy Policy</li>

                </ul>
            </div>
            <div className=" col-start-5 col-end-8 ">
            <h1 className="font-semibold text-black flex justify-start pb-3 ">Contact</h1>
            <div className="flex">
                <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></div>
                <div className="flex text-left pl-4 text-gray-400 pr-6 font-semibold">No 3 Azikiwe Road, 1st Floor, Former Pan Africa Building, Back of Unity Bank Beside Spar, Near Government House, Port Harcourt.</div>
            </div>

            <div className="flex">
                <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg></div>
                <div className="flex text-left pl-4 text-gray-400 pr-6 font-semibold">contact@pfxnet.com</div>
            </div>

            <div className="flex">
            <div class="h-6 w-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg></div>
               <div className="flex pl-4 pt-4">
               <div className=" relative px-2  border-2 rounded-full w-10 h-10 border-brandGreen cursor-pointer mr-2  ">
                <img src="/images/youtube.png" className="absolute right-1.5 w-6 top-1.5"/>
                </div>
                <div className=" relative px-2  border-2 rounded-full w-10 h-10 border-brandGreen cursor-pointer mr-2 ">
                <img src="/images/fb.png" className="absolute right-1.5 w-6 top-1.5"/>
                </div>
                <div className=" relative px-2  border-2 rounded-full w-10 h-10 border-brandGreen cursor-pointer mr-2 ">
                <img src="/images/twitter.png" className="absolute right-1.5 w-6 top-1.5"/>
                </div>
                <div className=" relative px-2  border-2 rounded-full w-10 h-10 border-brandGreen cursor-pointer mr-2 ">
                <img src="/images/instagram.png" className="absolute right-1.5 w-6 top-1.5"/>
                </div>
               </div>
            </div>
            </div>
        </div>
        <div className=" text-gray-400 flex justify-center bg-gray-100 rounded-sm">
            <span>©2021 PFXNET. All rights reserved</span>
        </div>
            
        </footer>
        </>
     );
}
 
export default Footer;