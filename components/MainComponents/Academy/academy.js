import Link from 'next/link'
const Academy = () => {
    return ( 
    <>
        <div className="grid md:grid-cols-2  justify-between text-brandGreen  my-8 px-6 md:px-40 ">
       <div>
       <h1 className="grid justify-start font-bold text-5xl   text-black ">PFX Trading <span className="grid justify-start">Academy</span></h1>
       <div className="text-justify text-10 md:justify-self-start pt-6">
       Pfx trading academy provides you with
The practical knowledge needed to trade
The financial market (forex & crypto) to
Maximize profit and minimize losses.
       </div>
        <div>
       
        <div className="btn bg-brandGreen bg-opacity-100 text-white mt-5 hover:shadow-inner shadow-md transition duration-500  hover:bg-opacity-90"><Link href='register'>Join Now</Link></div>
        </div>
       </div>
        <div className="md:justify-self-end my-4 md:my-0">
        <img className="rounded-3xl " src="/images/academy/academyLaptop.png"/>
        </div>
    </div>
    </> );
}
 
export default Academy;