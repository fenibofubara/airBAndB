const ContactForm = () => {
    return ( 
    <>
 <div className="grid md:grid-cols-2 gap-6 md:mx-20 mx-4 mt-20">
            <div className=" grid grid-cols-1 ">
            <div className=" grid md:text-left " >
    <h6 className="font-bold text-4xl text-black ">Interest Form
     </h6>
     <p className="text-brandGreen md:text-justify text-lg md:pr-10">Go ahead and fill the interest form and a Rep will be in touch with you immediately.</p>
     </div>
     <div className=" flex justify-center">
     <img src="/images/interestForm.png" className="w-52 h-52 place-self-center"/>
     </div>
    
 
            </div>
<div className="">
         
       
<form className="">
  <div className="flex flex-wrap  mb-2">
    <div className="w-full md:w-1/2 px-1 mb-2 md:mb-0">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 md:mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name"/>

    </div>
    <div className="w-full md:w-1/2 px-1">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email"/>
    </div>
  </div>
  <div className="flex flex-wrap   ">
    <div className="w-full md:w-1/2 px-1 mb-2 ">
     
      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 md:mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Phone Number"/>

    </div>
    <div className="w-full md:w-1/2 px-1 mb-2">

      <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="State"/>
    </div>
  </div>

  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
  
    <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Do you want to invest immediately?"/>

    </div>
  </div>
 
  <div className="flex flex-wrap  mb-3">
    <div className="w-full px-1">
  
      <textarea className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Drop your concerns & enquiries here"></textarea>

    </div>
  </div>
  <div className="flex flex-wrap  mb-3 md:items-center">
    <div className="pl-1 w-full ">
      <button className="shadow w-full md:w-2/6 flex justify-center bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2  rounded bg-brandGreen  " type="button">
        Submit
      </button>
    </div>
    
  </div>
</form>



            </div>

            </div>
    </> );
}
 
export default ContactForm;