import Head from 'next/head';
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import TopNavbar from "../components/Navbar/TopNavbar"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </Head>
      <div className="content dark font-sans">
       <TopNavbar/>
        <Navbar />
            {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;