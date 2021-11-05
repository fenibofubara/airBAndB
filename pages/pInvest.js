import Head from 'next/head'
import Banner from '../components/MainComponents/PropertyInvest/Banner/Banner'
import WriteUps from '../components/MainComponents/PropertyInvest/WriteUps/WriteUps'
import Overview from '../components/MainComponents/PropertyInvest/Overview/Overview'
import ContactForm from '../components/MainComponents/PropertyInvest/ContactForm/ContactForm'





export default function PInvest() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Property Invest</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
      <Banner title='Property Invest'/>
      <WriteUps/>
      <Overview/>
      <ContactForm/>
    </section>
  
 
  </>


    
  )
}
