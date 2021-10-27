import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '../static-components/SearchInput'


const Navbar = ()=>{
    return(
       <>
       <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <Link href="/" >
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-no-wrap uppercase text-black" >
        <div className="">
         <Image src="/images/nutloopLogo.svg" width={100} height={40} />
        </div>
      </a>
      </Link>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>       
    </div>
  <SearchInput/>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              Discover
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              Cart
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>
       </>
    )
}

export default Navbar