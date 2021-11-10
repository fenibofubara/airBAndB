import Link from 'next/link'

const data = [{id:1,image:'mall',location:'Opp. Int’l Airport IPO, Port Harcourt',threeMonths:'N800k - 3 Months',sixMonth:'N850K - 6 Months',twelveMonth:'N900K - 12 Months',landSeize:'Land Size - 456 Sqm'},{id:2,image:'mall',location:'Opp. Int’l Airport IPO, Port Harcourt',threeMonths:'N800k - 3 Months',sixMonth:'N850K - 6 Months',twelveMonth:'N900K - 12 Months',landSeize:'Land Size - 456 Sqm'},
{id:3,image:'mall',location:'Opp. Int’l Airport IPO, Port Harcourt',threeMonths:'N800k - 3 Months',sixMonth:'N850K - 6 Months',twelveMonth:'N900K - 12 Months',landSeize:'Land Size - 456 Sqm'},
{id:4,image:'mall',location:'Opp. Int’l Airport IPO, Port Harcourt',threeMonths:'N800k - 3 Months',sixMonth:'N850K - 6 Months',twelveMonth:'N900K - 12 Months',landSeize:'Land Size - 456 Sqm'},
{id:5,image:'mall',location:'Opp. Int’l Airport IPO, Port Harcourt',threeMonths:'N800k - 3 Months',sixMonth:'N850K - 6 Months',twelveMonth:'N900K - 12 Months',landSeize:'Land Size - 456 Sqm'},
{id:6,image:'mall',location:'Opp. Int’l Airport IPO, Port Harcourt',threeMonths:'N800k - 3 Months',sixMonth:'N850K - 6 Months',twelveMonth:'N900K - 12 Months',landSeize:'Land Size - 456 Sqm'}]

const Items = () => {
    return ( 
        <>
            <div className="grid md:grid-cols-3 gap-4 px-6 md:px-40 py-10 bg-gradient-to-b from-white via-white to-blue-100">
       
                {data.length !=0? (data.map((data,index)=>{
       return  <div className="rounded-md relative" key={data.id}>
                <img src="/images/mall.png" className=" w-full rounded transform hover:scale-150 hover:z-30"/>
                <div className="absolute btn bg-brandGreen border-brandGreen text-white inset-x-24 top-56"><Link href='register'>Order</Link></div>
                <div className="bg-white py-10 font-semibold">
                    <p className="text-brandGreen ">Opp. Int’l Airport IPO, Port Harcourt</p>
                    <p>N800k - 3 Months</p>
                    <p>N850K - 6 Months</p>
                    <p>N900K - 12 Months</p>
                    <p>Land Size - 456 Sqm</p>
                </div>
                </div> 

    })):<div>Null</div>}
            </div>
        </>
     );
}
 
export default Items;