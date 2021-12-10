import Link from 'next/link'
const LastSession = () => {
    return ( 
    <>
        <div className="grid md:grid-cols-2  justify-between text-brandGreen  my-8 px-6 md:px-40 ">
       <div className="grid items-center">

       <div className="text-justify text-10 md:justify-self-start pt-6 mx-8">
       Our main priority is to provide the right knowledge of trading the fin financial market. Our students will have the practical knowledge and the right tools needed to profit from the whole money market ecosystem.
       </div>
        <div>
       
        <div className="btn bg-brandGreen bg-opacity-100 mx-8 text-white mt-5 hover:shadow-inner shadow-md transition duration-500  hover:bg-opacity-90"><Link href='register'>Join Now</Link></div>
        </div>
       </div>
        <div className="md:justify-self-end my-4 md:my-0">
        <img className="rounded-3xl " src="/images/academy/lastImage.png"/>
        </div>
    </div>
    </> );
}
 
export default LastSession;