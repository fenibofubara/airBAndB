const Contact = () => {
    return ( 
        <>
            <div className="grid grid-cols-2 gap-6">
            <div className=" grid grid-cols-1 ">
            <div className=" grid text-left " >
    <h6 className="font-bold text-4xl text-black ">Contact Us
     </h6>
     <p className="text-brandGreen text-justify">Our help line is 24hrs open to receive any inquiry or feedback. Please feel free to drop us an email from the form below and we will get back to you as soon as we can</p>
     </div>
     <div className=" flex justify-center">
     <img src="/images/technical-support.png" className="w-52 h-52 place-self-center"/>
     </div>
    
 
            </div>
<div className="">
         
       
<form className="">
  <div className="flex flex-wrap  mb-2">
    <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email"/>
    </div>
  </div>
  <div className="flex flex-wrap  mb-2 ">
    <div className="w-full md:w-1/2 px-1 mb-6 md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Phone Number"/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="State"/>
    </div>
  </div>
 
  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
  
      <textarea className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="message"></textarea>

    </div>
  </div>
  <div className="flex flex-wrap  mb-3 md:items-center">
    <div className="pl-1">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 rounded bg-brandGreen w-full" type="button">
        Submit
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>



            </div>

            </div>
        </>
     );
}
 
export default Contact;