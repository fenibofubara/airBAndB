const Banner = ({title}) => {
    return ( 
        <>
       
            <div className="bg-gray-200  bg-otherBackGround h-60 bg-no-repeat bg-cover flex justify-center mt-28">
            <span className="place-self-center  text-brandGreen text-4xl font-semibold  ">{title}</span>
            </div>
            

        </>
     );
}
 
export default Banner;