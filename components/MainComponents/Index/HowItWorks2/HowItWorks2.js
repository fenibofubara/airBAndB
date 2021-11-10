const HowItWorks2 = () => {
    return ( <>
     <div >
        <h6 className="uppercase  font-bold text-4xl text-center block text-black py-10">How it works</h6>
       
    </div>
        <div className="md:flex ">
    <div className="relative md:w-1/2 transform  hover:scale-125">
          <span className=" flex justify-center">
          <img src="/images/join.png" className="h-28 "/> 
          <img src="/images/register.png" className="h-12 absolute top-8 left-18"/> 
          </span>
        <div className="text-brandGreen ">
        <span className="font-semibold text-lg">Register</span>
        <span className="block text-brandYellow">
        Register to secure your position
        </span>
        </div>
    </div>
   
    <div className="relative ">

    <div className="flex justify-center">
    <div className="py-14 px-8">
    <img src="/images/line.png" className=" h-1 hidden md:block"/>
    </div>
    <span className="relative transform  hover:scale-125">
    <img src="/images/join.png" className="h-28 md:w-80"/> 
    <img src="/images/invitation.png" className="h-12 absolute top-8 left-8 md:left-6"/> 
    </span>
    <div className="py-14 px-8"><img src="/images/line.png" className=" h-1 hidden md:block"/></div>
    </div>

    <div className="text-brandGreen ">
        <span className="font-semibold text-lg">Invite</span>
        <span className="block text-brandYellow">
        Invite your friends to also join and recieve <span className="block">instant thank you commision</span>
        </span>
    </div>
    </div>


    <div className="relative md:w-1/2 transform  hover:scale-125">
    <span className="flex justify-center">
          <img src="/images/join.png" className="h-28 "/> 
          <img src="/images/check.png" className="h-12 absolute top-8 left-18"/> 
          </span>
          <div className="text-brandGreen ">
        <span className="font-semibold text-lg">Success</span>
        <span className="block text-brandYellow">
    Keep duplicating the process and before you know it success is achievable
        </span>
    </div>
    </div>
</div>

<div className="grid md:grid-cols-3 gap-4">
<div>
<img src="/images/monoline.png"/>

</div>
<div>
<img src="/images/referral.png"/>

</div>
<div>
<img src="/images/rejoin.png"/>

</div>
 
</div>
    </> );
}
 
export default HowItWorks2;