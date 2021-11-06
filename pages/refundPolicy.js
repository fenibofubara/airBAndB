import Head from 'next/head'
import Banner from '../components/MainComponents/PropertyInvest/Banner/Banner'
import Content from '../components/MainComponents/RefundPolicy/Content'









export default function RefundPolicy() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Refund Policy</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
    <Banner title='Refund Policy'/>
    </section>
    <section id="firstBody">
    <Content/>
  
    </section>
   
  
    
    
    
  
 
  </>


    
  )
}
