import Head from 'next/head'
import Banner from '../components/MainComponents/PropertyInvest/Banner/Banner'
import FirstBody from '../components/MainComponents/Privacy/FirstBody/FirstBody'
import WhyWeNeedYourData from '../components/MainComponents/Privacy/WhyWeNeedYourData/WhyWeNeedYourData'
import WhatWeData from '../components/MainComponents/Privacy/WhatWeData/WhatWeData'
import HowLongWeKeep from '../components/MainComponents/Privacy/HowLongWeKeep/HowLongWeKeep'
import WhatAreYourRights from '../components/MainComponents/Privacy/WhatAreYourRights/WhatAreYourRights'
import ContactUs from '../components/MainComponents/Privacy/ContactUs/ContactUs'









export default function Privacy() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Privacy</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
    <Banner title='Our Privacy Policy'/>
    </section>
    <section id="firstBody">
    <FirstBody/>
    <WhyWeNeedYourData/>
    <WhatWeData/>
    <HowLongWeKeep/>
    <WhatAreYourRights/>
    <ContactUs/>
    
  
 
    </section>

  </>


    
  )
}
