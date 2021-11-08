const Banner = () => {
    return ( 
    <>
    <div className="bg-center bg-fixed bg-no-repeat bg-cover  relative" id="heroImage">

    <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
			<div className="mx-2 text-center">
				<h1 className=" uppercase text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-400  to-green-400 md:text-8xl ">
					all in one
           </h1>
           <h1 className="md:text-8xl uppercase text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-white to-yellow-500">
             MEGA <span className="">PLATFORM</span>
           </h1>
           
           <div className="flex justify-center items-center py-5 text-white ">  Property Trading, DEFI-Staking Trade, Crypto Bot Trade, House-Hold Property Support Scheme & Affiliate Program.</div>
           <div className="flex justify-center items-center"> 
           <button className="p-2  my-5 px-16 mx-2 bg-transparent border-2 bg-brandGreen bg-opacity-75 hover:bg-opacity-100 border-brandGreen rounded hover:shadow-inner font-bold text-white shadow-md transition duration-500 md:text-lg">Start Now</button>
           </div>
        </div>
    </div>

    </div>

    </> );
}
 
export default Banner;