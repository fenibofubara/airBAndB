const Banner = () => {
    return ( 
    <>
    <div className="bg-center bg-fixed bg-no-repeat bg-cover  relative" id="heroImage">

    <div class="h-screen bg-opacity-50 bg-black flex items-center justify-center">
			<div class="mx-2 text-center">
				<h1 class="text-black font-black text-bannerText xs:text-5xl md:text-6xl">
					ALL IN ONE
           </h1>
           <h1 class="text-black font-black text-bannerText xs:text-4xl md:text-5xl leading-tight">
             MEGA <span class="text-brandYellow">PLATFORM</span>
           </h1>
           <div class="flex justify-center items-center py-5 ">  Property Trading, DEFI-Staking Trade, Crypto Bot Trade, House-Hold Property Support Scheme & Affiliate Program.</div>
           <div class="flex justify-center items-center"> 
           <button class="p-2  my-5 px-16 mx-2 bg-transparent border-2 bg-brandGreen bg-opacity-75 hover:bg-opacity-100 border-brandGreen rounded hover:shadow-inner font-bold text-white shadow-md transition duration-500 md:text-lg">Start Now</button>
           </div>
        </div>
    </div>

    </div>

    </> );
}
 
export default Banner;