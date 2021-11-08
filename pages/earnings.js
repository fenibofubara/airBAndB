import Head from 'next/head'
import Banner from '../components/MainComponents/PropertyInvest/Banner/Banner'
import Content from '../components/MainComponents/Disclaimer/Disclaimer'









export default function Earnings() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Earning Disclaimer</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
    <Banner title='Our Earnings Disclaimer'/>
    </section>
    <section id="firstBody">
    <Content/>
    
    </section>

  </>


    
  )
}
