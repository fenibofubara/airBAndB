import Link from 'next/link'

const data = [{id:1,image:'mall1',location:'Gardens Estate, Off New Airport Road PH',threeMonths:'N3M - 3 Months(classic)',sixMonth:'N3.1M - 6 Months(classic)',twelveMonth:'N900K - 12 Months',landSeize:'Land Size - 465Sqm'},{id:2,image:'mall2',location:'Ivy Estate.Opp Int’l Airport IPO, PH',threeMonths:'N800k - 3 Months',sixMonth:'N850K - 6 Months',twelveMonth:'N900K - 12 Months',landSeize:'Land Size - 465 Sqm'},
{id:3,image:'mall3',location:'Sunshine City Estate,Opp. Int’l Airport IPO, PH',threeMonths:'N650k - 3 Months',sixMonth:'N700K - 6 Months',twelveMonth:'N800K - 12 Months',landSeize:'Land Size -  Sqm'},
{id:4,image:'mall4',location:'Owkwood Prime city,Omagwa PH',threeMonths:'N950k - 3 Months(Classic)',sixMonth:'N1M - 6 Months (Classic)',twelveMonth:'N1.1M - 12 Months (Classic)',landSeize:'Land Size - 465 Sqm'},
{id:5,image:'mall5',location:'Rosewood Supreme Estate,Eneka,PH',threeMonths:'N3.5M - 3 Months',sixMonth:'N3.7M - 6 Months',twelveMonth:'N4M - 12 Months',landSeize:'Land Size - 456 Sqm'},
{id:6,image:'mall6',location:'Coral Gold Estate,Aluu PH',threeMonths:'N6M - 3 Months',sixMonth:'N6.2M - 6 Months',twelveMonth:'N6.5M - 12 Months',landSeize:'Land Size - 456 Sqm'}]

const Items = () => {
    return ( 
        <>
            <div className="grid md:grid-cols-3 gap-4 px-6 md:px-40 py-10 bg-gradient-to-b from-white via-white to-blue-100">
       
                {data.length !=0? (data.map((data,index)=>{
       return  <div className="rounded-md relative" key={data.id}>
                <img src={`/images/mall/${data.image}.jpeg`} className=" w-full rounded transform hover:scale-150 hover:z-30"/>
                <div className="absolute btn bg-brandGreen border-brandGreen text-white inset-x-24 top-56"><Link href='register'>Order</Link></div>
                <div className="bg-white py-10 font-semibold">
                    <p className="text-brandGreen ">{data.location}</p>
                    <p>{data.threeMonths}</p>
                    <p>{data.sixMonth}</p>
                    <p>{data.twelveMonth}</p>
                    <p>{data.landSeize}</p>
                </div>
                </div> 

    })):<div>Null</div>}
            </div>
        </>
     );
}
 
export default Items;