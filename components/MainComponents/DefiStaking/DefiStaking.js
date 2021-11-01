const DefiStaking = () => {
    return ( 
    <>
       <div >
        <h6 className="uppercase  font-bold text-4xl text-center block text-black pt-20">DEFI Staking Trade</h6>
        <p className="px-80 font-semibold text-brandGreen">Explore the World of Defi
(Decentralized Finance) With our
partner Staking Platform</p>
    </div>
    <div className="grid grid-cols-2  justify-between text-brandGreen  my-8  ">
       <div className="justify-self-start ">
       <div className="text-justify text-10">
       We Provide you a staking platform that is the next evolution of alternative assets. Our resilient infrastructure and yield strategies give you the best
decentralized finance experience in the world.
An ecosystem includes: Web Wallet, Multi-chain blockchain system, Swap platform, IDO and NFT Market place of Non-Fungible Tokens ...

       </div>
       
      
        <div className="mt-24">
        <h1 className="font-bold  text-brandGreen text-justify">The platform is designed to provide multiple opportunities & benefits for its <span className="text-brandYellow">investors, traders, and users to earn profit daily.</span> </h1>
        <div className="btn bg-brandGreen bg-opacity-100 text-white mt-5 hover:shadow-inner shadow-md transition duration-500  hover:bg-opacity-90">Join Now</div>
        </div>
       </div>
        <div className="justify-self-end">
        <img className="rounded-3xl " src="/images/defi.png"/>
        </div>
    </div>

<div className="grid grid-cols-2  justify-between place-items-center">
    <div className="flex place-items-center relative">
        <img src="/images/join.png" className="h-40 "/> 
        <img src="/images/supply-chain.png" className="h-16 absolute top-12 left-12"/> 

        <span className="text-black font-semibold text-lg ">Join the <span className="block">Community</span> </span>
    </div>
    <div className="flex place-items-center relative">
        <img src="/images/join.png" className="h-40 "/> 
        <img src="/images/statistics.png" className="h-16 absolute top-12 left-12"/> 
        <span className="text-black font-semibold text-lg ">Highest Interest <span className="block">Rate</span> </span>
    </div>
  
</div>

<div className="grid grid-cols-2  justify-between place-items-center my-8">
<div className="flex place-items-center relative">
        <img src="/images/join.png" className="h-40 "/> 
        <img src="/images/instantwithraw.png" className="h-16 absolute top-12 left-12"/> 
        <span className="text-black font-semibold text-lg ">Instant <span className="block">Withraw</span> </span>
    </div>
    <div className="flex place-items-center relative">
        <img src="/images/join.png" className="h-40 "/> 
        <img src="/images/shield.png" className="h-16 absolute top-12 left-12"/> 
        <span className="text-black font-semibold text-lg ">Stable & <span className="block">Secure</span> </span>
    </div>
  
</div>
    </> );
}
 
export default DefiStaking;