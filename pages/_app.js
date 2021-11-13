import '../styles/build/styles.css'
import  "../styles/layout.css"

import Layout from '../components/Layout'
import '../public/fontawesome-free-5.13.0-web/css/all.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
