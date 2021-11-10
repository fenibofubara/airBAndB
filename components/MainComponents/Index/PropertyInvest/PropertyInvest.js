import Link from 'next/link'
const PropertyInvest = () => {
    return ( 
    <>
   <section id="invest-section ">
        <h6 className="uppercase  font-bold text-4xl text-center block text-black py-8">PROPERTY INVEST</h6>

     <img className="rounded-3xl" src="/images/propertyInvest.png"/>
        <div className="flex place-content-center ">
        <div className=" btn md:w-80 bg-opacity-100 text-brandGreen mt-5 hover:shadow-inner shadow-md transition duration-500  hover:bg-opacity-90 hover:bg-brandGreen hover:text-white"><Link href='pInvest'>View Available Plan</Link></div>
        </div> 
     
        
   </section>
    </> );
}
 
export default PropertyInvest;