import Head from 'next/head'
import Banner from '../components/MainComponents/PropertyInvest/Banner/Banner'
import Items from '../components/MainComponents/Mall/Items/Items'






export default function PInvest() {
  return (
  
  <>
     <Head>
        <title>Property Trade | Mall</title>
        <meta name='keywords' content='login'/>
        <link rel="icon" href="/images/logo.png" />
     </Head>
    <section id="banner">
      <Banner title='Pfx Mall'/>
      <Items/>

    </section>
  
 
  </>


    
  )
}
