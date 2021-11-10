import Link from 'next/link'
const PropertyTrade = () => {
    return ( 
    <>

    <section id="property-section" className=" ">
        <h1 className="uppercase text-4xl font-bold md:text-4xl text-center block text-black ">Property Trade</h1>
        <p className="md:px-80 md:font-semibold text-brandGreen">We developed a marketing App that trades properties of any real estate company across the 36 states
of Nigeria</p>
    </section> 

    <div className="md:flex md:justify-between text-brandGreen  my-8 mx-4 md:mx-0  ">
       <div>
       <ul className="mx-0 px-0">
            <li className=" flex mb-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Do you want to acquire plots of lands?</li>
 <li className=" flex my-4 justify-start" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Do you want to invest in real estate (property)?</li>
 <li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Do you want to buy cheap properties?</li>
 <li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Do you need professionals to manage any of your properties?</li>
 <li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Do you want to become a professional realtor?</li>
 <li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Do you want to earn a stable and passive income?</li>
        </ul>
      
        <div className="mt-24">
        <h1 className="font-bold text-4xl text-brandGreen">We Got You Covered</h1>
        <div className="btn bg-brandGreen bg-opacity-100 text-white mt-5 hover:shadow-inner shadow-md transition duration-500  hover:bg-opacity-90"><Link href='mall'>View Available Product</Link></div>
        </div>
       </div>
        <div>
        <img className="rounded-3xl mt-4 md:mt-0 " src="/images/propertyTrade.png"/>
        </div>
        
    

    </div>
   

    </> );
}
 
export default PropertyTrade;