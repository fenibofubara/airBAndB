import Head from 'next/head'
// import Layout from '../styles/Layout.module.css'
// import  "../styles/layout.css"
import Banner from '../components/MainComponents/Banner/Banner'
import Sliderr from '../components/MainComponents/Slider/Slider'
import PropertyTrade from '../components/MainComponents/PropertyTrade/PropertyTrade'
import PropertyInvest from '../components/MainComponents/PropertyInvest/PropertyInvest'
import DefiStaking from '../components/MainComponents/DefiStaking/DefiStaking'
import CryptoBot from '../components/MainComponents/CryptoBot/CryptoBot'
import PfxAffiliate from '../components/MainComponents/PfxAffiliate/PfxAffiliate'



export default function Home() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Welcome</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
      <Banner/>
    </section>
    <section id="slider">
      <Sliderr/>
    </section>
    <section id="propertyTrade">
      <PropertyTrade/>
    </section>
    <section id="propertyInvest">
      <PropertyInvest/>
    </section>
    <section id="defi">
      <DefiStaking/>
    </section>
    <section id="cryptoBot">
      <CryptoBot/>
    </section>
    <section id="pfxAffiliate">
      <PfxAffiliate/>
    </section>
    <section id="how1">How it Works</section>
    <section id="productCategories">Product Categories</section>
    <section id="affiliateProgram">Affiliate Program</section>
    <section id="how2">How it Works Two</section>
    <section id="activate">Activate</section>
    <section id="paidAffiliate">Paid Affiliate</section>
    <section id="trusted">Trusted</section>
    <section id="contact">Contact Us</section>
  </>


    
  )
}
