import Head from 'next/head'
import Banner from '../components/MainComponents/PropertyInvest/Banner/Banner'
import FirstBody from '../components/MainComponents/PropertyInvest/FirstBody/FirstBody'






export default function PInvest() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Privacy</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
      <Banner title='Privacy Policy'/>
      <FirstBody/>
    </section>
  
 
  </>


    
  )
}
