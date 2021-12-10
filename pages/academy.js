import Head from 'next/head'
import Banner from '../components/MainComponents/PropertyInvest/Banner/Banner'
import Academy from '../components/MainComponents/Academy/academy'
import JoinClass from '../components/MainComponents/Academy/joinClass'
import LastSession from '../components/MainComponents/Academy/lastSession'






export default function PTA() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Academy</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
      <Banner title='PFX Trading Academy'/>
      <Academy/>
      <JoinClass/>
      <LastSession/>

    </section>
 
  
 
  </>


    
  )
}
