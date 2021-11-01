const HowItWorks2 = () => {
    return ( <>
     <div >
        <h6 className="uppercase  font-bold text-4xl text-center block text-black py-10">How it works</h6>
       
    </div>
        <div className="grid grid-cols-3">
    <div className="relative bg-red-300">
          <span className="grid justify-items-start grid-cols-2">
          <img src="/images/join.png" className="h-28 "/> 
          <img src="/images/register.png" className="h-12 absolute top-8 left-8"/> 
          </span>
        <span className="text-brandGreen font-semibold text-lg">Register</span>
    </div>
   
    <div className="relative bg-red-500">
          <span className="grid justify-items-center">
          <img src="/images/join.png" className="h-40 "/> 
          <img src="/images/invitation.png" className="h-16 absolute top-12 left-21"/> 
          </span>
        <span className="text-brandGreen  font-semibold text-lg">Invite</span>
    </div>
    <div className="relative bg-red-700">
          <span className="grid justify-items-center">
          <img src="/images/join.png" className="h-40 "/> 
          <img src="/images/check.png" className="h-16 absolute top-12 left-21"/> 
          </span>
        <span className="text-brandGreen  font-semibold text-lg">Success </span>
    </div>
</div>
    </> );
}
 
export default HowItWorks2;