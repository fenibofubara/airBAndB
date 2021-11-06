import Head from 'next/head'
import Banner from '../components/MainComponents/PropertyInvest/Banner/Banner'
import PartA from '../components/MainComponents/Terms/PartA/PartA'
import AccountEligiblity from '../components/MainComponents/Terms/PartA/AccountEligiblity'
import Disclaimer from '../components/MainComponents/Terms/PartA/Disclaimer'
import PartB from '../components/MainComponents/Terms/PartB/PartB'









export default function Terms() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Terms</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
    <Banner title='Terms And Condition'/>
    </section>
    <section id="firstBody">
    <PartA/>
    <AccountEligiblity/>
    <Disclaimer/>
    <PartB/>
    </section>

  </>


    
  )
}
