const data = [{id:1,image:'pInvest1',title:'Sunshine City Estate',location:'Uzuaku, & Ipo, Port Harcourt.',area:'1,860,000sqm',price:'N2,000.00 per sqm',minimum:'25sqm.',tenor:'12 months.',roi:'30%'},
{id:2,image:'pInvest2',title:'Sunshine City Estate',location:'Uzuaku, & Ipo, Port Harcourt.',area:'1,860,000sqm',price:'N2,000.00 per sqm',minimum:'25sqm.',tenor:'12 months.',roi:'30%'},
{id:3,image:'pInvest3',title:'Sunshine City Estate',location:'Uzuaku, & Ipo, Port Harcourt.',area:'1,860,000sqm',price:'N2,000.00 per sqm',minimum:'25sqm.',tenor:'12 months.',roi:'30%'},
{id:4,image:'pInvest4',title:'Sunshine City Estate',location:'Uzuaku, & Ipo, Port Harcourt.',area:'1,860,000sqm',price:'N2,000.00 per sqm',minimum:'25sqm.',tenor:'12 months.',roi:'30%'}]


const Overview = () => {
    return ( 
     <>
     <div className="grid md:grid-cols-2 gap-2  md:mx-20">
    {data.length !=0? (data.map((data,index)=>{
    return  <div className="md:flex border-1 shadow-md border-gray-500 rounded-md" key={data.id}>
             <div className="pt-3 px-3 ">
             <img src={`/images/propertyInvest/${data.image}.jpeg`} className="w-60 md:transform hover:scale-150"/>
             </div>
             <div className="pt-3 px-3">
                <h1 className="text-brandGreen font-semibold text-lg ">{data.title}</h1>
<ul className="mx-0 px-0 text-brandGreen text-md pt-2 ">
<li className=" flex mb-4 " > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></span> <span className="text-black">{data.location}</span></li>
<li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg></span><span className="font-semibold text-brandYellow">Total available sqm:</span><span className="text-black">{data.area}</span> </li>
<li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg></span><span className="font-semibold text-brandYellow">Price:</span><span className="text-black">{data.price}</span></li>
<li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></span><span className="font-semibold text-brandYellow">Minimum Investment:</span><span className="text-black"> {data.minimum}
</span></li>
<li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg></span><span className="font-semibold text-brandYellow">Tenor:</span><span className="text-black">{data.tenor}
</span></li>
<li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
</svg></span><span className="font-semibold text-brandYellow">Return On Investment:</span><span className="text-black"> {data.roi}
</span></li>

</ul>
             </div>
         </div>

    })):<div>Null</div>}
         {/* <div className="bg-red-400">2</div> */}
     </div>

    </>);
}
 
export default Overview;