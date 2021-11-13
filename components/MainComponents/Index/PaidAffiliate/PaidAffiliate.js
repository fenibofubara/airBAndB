import ClientOnlyPortal from "../../../../pages/ClientOnlyPortal";
import Modal from '../../../../pages/Modal';
import React, {useState} from 'react';



const PaidAffiliate = () => {
const [open, setOpen] = useState()

    return ( 
    <>
    <div>
    <h6 className="uppercase  font-bold text-4xl text-center block text-black pt-20">Paid Affiliate Members 
    <span className="block">Benefits in Ten (10)  Ways</span></h6>

    <div className="md:flex md:justify-between text-brandGreen  my-8  ">
       <div>
       <ul className="mx-0 px-0">
            <li className=" flex mb-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn Monoline Bonus. (Up To 13.4 Million Naira In Cash And Property Incentives) </li>
 <li className=" flex my-4" > <span className="inline-block md:pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn PFX Gift Pack Bonus. (Cashback From Package 2 To Package 8) </li>
 <li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn Direct Referral Bonus (10-30%) </li>
 <li className=" flex my-4" > <span className="inline-block md:pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn Upgrade Bonus (10% Cost of Direct Sponsored Upgrade) </li>
 <li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn Commission Bonus (7-10%) </li>
</ul>
        <div className="mt-8">
        <div className="btn bg-brandGreen bg-opacity-100 text-white mt-5 hover:shadow-inner shadow-md transition duration-500  hover:bg-opacity-90" onClick={() => setOpen(true)}>View Reward Plans</div>
        </div>
       </div>
        <div>
        <ul className="mt-2">
            <li className=" flex mb-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn Collateral Free Loan at Completion of Circle 6.  </li>
 <li className=" flex my-4" > <span className="inline-block md:pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn Rejoin Bonus at Completion of Circle 12.  </li>
 <li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn Passive Income from Staking </li>
 <li className=" flex my-4" > <span className="inline-block pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Earn Passive Income from Trading Bots </li>
 <li className=" flex my-4" > <span className="inline-block md:pr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg></span>Get 35% Discounts on Property Support Scheme </li>
</ul>
        </div>
        
    

    </div>
   
    </div>


    {open && (
                    <ClientOnlyPortal selector ="#modal">
                        <Modal setOpen={setOpen} title='Reward Plans' >
                        <img src="/images/rewardPlan.png" alt="rewardPlan" />
                        </Modal>
                    </ClientOnlyPortal>
                )
            }
    </> );
}
 
export default PaidAffiliate;

