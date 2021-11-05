const Banner = ({title}) => {
    return ( 
        <>
       
            <div className="bg-gray-200 relative">
            <img src="/images/propertyInvest/bg.png"/>
            <span className="absolute text-brandGreen font-semibold text-4xl top-28 inset-x-1/4">{title}</span>
            </div>
            

        </>
     );
}
 
export default Banner;