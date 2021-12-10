import Link from 'next/link'
const JoinClass = () => {
    return ( 
    <>
        <div className="grid md:grid-cols-2  justify-between text-brandGreen  my-8 px-6 md:px-40 ">
       <div>
       <div className="p-2  relative">
       <img className="rounded-3xl md:w-auto md:h-96 w-full" src="/images/academy/laptopHand.png"/>
       <img className="absolute bottom-20 md:left-28 " src="/images/academy/book.png"/>
       <img className="absolute  bottom-2 md:left-80 " src="/images/academy/badge.png"/>
       <div className="absolute bottom-20 md:right-14 right-60 text-white text-lg font-bold">
       <span>Cost</span>
       <span className="block">N30,000</span>
       </div>
    
       </div>
    
       </div>
        <div className="grid md:justify-self-end my-4 md:my-0">
        <div className="grid items-center">
        <h1 className="uppercase text-black font-bold text-2xl">JOIN THE MASTER CLASS</h1>
        <ul className="mx-0 px-0">
            <li className=" flex mb-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Online Training weekly

</li>
 <li className=" flex my-4" > <span className="inline-block md:pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Offline training at our office
location

</li>
 <li className=" flex my-4" > <span className="inline-block md:pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>One on One training on demand  
</li>


</ul>
        <div className="mt-8">
        <div className="btn bg-brandGreen bg-opacity-100 text-white mt-5 hover:shadow-inner shadow-md transition duration-500  hover:bg-opacity-90"><Link href='register'>Join Now</Link></div>
        </div>
        </div>
  
        </div>
    </div>
    </> );
}
 
export default JoinClass;