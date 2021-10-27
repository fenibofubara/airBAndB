import Link from "next/link";
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.wrapper} footer relative pt-1 pb-10 bg-white dark:bg-gray-800`}>
            <div className="container mx-auto text-left px-2 sm:px-5 lg:px-20">
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full text-center md:text-left flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col mt-10 text-center">
                            <Link href="/">
                                <a className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap">
                                    <div className="logo">
                                        <Image src="/images/sifuse-logo.svg" width={80} height={80} />
                                    </div>
                                </a>
                            </Link>
                            <span className="font-light text-xs text-sifuseGrayTwo dark:text-white uppercase mb-2">© 2020 All Rights Reserved</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="my-2"><a href="#" className="text-sifuseGrayTwo dark:text-white text-sm lg:text-base hover:text-gray-700">Contact Us — <br className="hidden md:block"></br>info@sifuse</a></span>
                            <span className="my-2"><a href="#" className="text-sifuseGrayTwo dark:text-white text-sm lg:text-base hover:text-gray-700"></a></span>
                            <span className="my-2"><a href="#" className="text-sifuseGrayTwo dark:text-white text-sm lg:text-base hover:text-gray-700">Office —
                             <br></br> 14 Adetokunbo Ademola Street, <br></br> Victoria Island, Lagos, Nigeria</a></span>
                        </div>
                        <div className="md:flex flex-col hidden">
                            <span className="my-2"><a href="#" className="text-sifuseBlack dark:text-white text-sm lg:text-base hover:text-gray-700">About Us</a></span>
                            <span className="my-2"><a href="#" className="text-sifuseBlack dark:text-white text-sm lg:text-base hover:text-gray-700">Blog</a></span>
                            <span className="my-2"><a href="#" className="text-sifuseBlack dark:text-white text-sm lg:text-base hover:text-gray-700">Event</a></span>
                            <span className="my-2"><a href="#" className="text-sifuseBlack dark:text-white text-sm lg:text-base hover:text-gray-700">Disclaimer</a></span>
                            <span className="my-2"><a href="#" className="text-sifuseBlack dark:text-white text-sm lg:text-base hover:text-gray-700">FAQs</a></span>
                        </div>
                        <div className="flex md:flex-col justify-center md:justify-start mt-10 md:mt-0 md:relative right-0 mr-2 sm:mr-10">
                            <span>
                                <a href="#" className="text-sifuseBlack dark:text-white flex items-center hover:text-gray-700">
                                    <Image className="dark:filter-white" src="/images/facebook_img.svg" width={90} height={44} />
                                </a>
                            </span>
                            <span>
                                <a href="#" className="text-sifuseBlack dark:text-white flex items-center hover:text-gray-700">
                                    <Image className="dark:filter-white" src="/images/twitter_img.svg" width={80} height={44} />
                                </a>
                            </span>
                            <span>
                                <a href="#" className="text-sifuseBlack dark:text-white flex items-center hover:text-gray-700">
                                    <Image className="dark:filter-white" src="/images/instagram_img.svg" width={90} height={44} />
                                </a>
                            </span>
                            <span>
                                <a href="#" className="text-sifuseBlack dark:text-white flex items-center hover:text-gray-700">
                                    <Image className="dark:filter-white" src="/images/youtube_img.svg" width={80} height={44} />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;