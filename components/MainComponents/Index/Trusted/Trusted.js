import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

const Trusted = () => {
    return ( 
    <>
       <div className="py-4 ">
        <h6 className="uppercase  font-bold text-4xl text-center block text-black">Trusted by <span className="hidden md:block">Thousands of</span> <span className="block">Happy AFFILIATE </span></h6>
        <p className=" font-semibold text-brandGreen">These are the stories of our affiliates who have joined us with great pleasure and have benefited from the system.</p>
    </div>

    <div className="container mx-auto md:my-12">
            <div className="flex items-center justify-center w-full h-full md:py-14 py-14 sm:py-8 px-4">
         
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} isPlaying={true} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                  
                        <ButtonBack role="button" aria-label="slide backward" className="absolute bg-white border-2 border-brandGreen h-9 w-9 rounded-full z-30 left-0 ml-8 focus:outline-none focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer  hover:bg-brandGreen" id="prev">
                            <svg width={8} height={14} class="absolute left-3 top-2 fill-current text-brandGreen" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                       
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/fenibo.jpeg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Fenibo</span>
                                                    <span className="text-gray-800">Software Engineer</span>
                                                    <span className="text-gray-800">Lagos</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “Pfxnet is worth investing in. I see great prospects with them
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/chris.jpg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Chris Chukwuemeka Mazi.</span>
                                                    <span className="text-gray-800"> Engineer</span>
                                                    <span className="text-gray-800">Lagos</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “ PropertyFx is simply amazing, with their simplified process of acquiring lands and house hold property, I am already on my way to becoming a landlord and  with her unique and mutually beneficial Mono-line system my issue of cash is solved. I recommend you join and experience the success that comes with PropertyFx..
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/christy.jpg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Christy Ichella .</span>
                                                    <span className="text-gray-800">Civil servant </span>
                                                    <span className="text-gray-800">Rivers State</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “Property fx is the best system. It is uniquely designed to help you get Cash, lands and household Properties in the most simplest and affordable way. I am proud to say that I am immensely benefitting from this system. Sometimes, you have to make sacrifices to win with money. So, I want to encourage you all to register with Property fx and have a taste of the goodies.
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/lucky.jpg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Lucky Efi.</span>
                                                    <span className="text-gray-800">System Analyst</span>
                                                    <span className="text-gray-800">Rivers State</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “With PropertyFx: I feel on top of the world, I feel incredible, I feel motivated, I feel empowered. Join Pfx and experience the same feelings for yourself..
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/udo.jpeg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Mrs Udo Chika</span>
                                                    <span className="text-gray-800">Teacher</span>
                                                    <span className="text-gray-800">Rivers State</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “ProperFX has transformed me financially since I  signed up as an affiliate, with pfx, the sky is just the starting point and the best is yet to come!!!
                                    
                                         </p>
                                        </div>
                                    </div>
                                    
                                    </Slide>
                            
                                </div>
                            </Slider>
                        </div>
                    
                        <ButtonNext role="button" aria-label="slide forward" className="bg-white border-2 border-brandGreen h-9 w-9 rounded-full absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-brandGreen" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" className="absolute left-3 top-2 fill-current text-brandGreen" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"  />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} isPlaying={true} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        {/* <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack> */}
                        <ButtonBack role="button" aria-label="slide backward" className="absolute bg-white border-2 border-brandGreen h-9 w-9 rounded-full z-30 left-0 ml-8 focus:outline-none focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer  hover:bg-brandGreen" id="prev">
                            <svg width={8} height={14} class="absolute left-3 top-2 fill-current text-brandGreen" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/fenibo.jpeg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Fenibo</span>
                                                    <span className="text-gray-800">Software Engineer</span>
                                                    <span className="text-gray-800">Lagos</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “Pfxnet is worth investing in. I see great prospects with them
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/chris.jpg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Chris Chukwuemeka Mazi.</span>
                                                    <span className="text-gray-800"> Engineer</span>
                                                    <span className="text-gray-800">Lagos</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “ PropertyFx is simply amazing, with their simplified process of acquiring lands and house hold property, I am already on my way to becoming a landlord and  with her unique and mutually beneficial Mono-line system my issue of cash is solved. I recommend you join and experience the success that comes with PropertyFx..
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/christy.jpg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Christy Ichella .</span>
                                                    <span className="text-gray-800">Civil servant </span>
                                                    <span className="text-gray-800">Rivers State</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “Property fx is the best system. It is uniquely designed to help you get Cash, lands and household Properties in the most simplest and affordable way. I am proud to say that I am immensely benefitting from this system. Sometimes, you have to make sacrifices to win with money. So, I want to encourage you all to register with Property fx and have a taste of the goodies.
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/lucky.jpg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Lucky Efi.</span>
                                                    <span className="text-gray-800">System Analyst</span>
                                                    <span className="text-gray-800">Rivers State</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “With PropertyFx: I feel on top of the world, I feel incredible, I feel motivated, I feel empowered. Join Pfx and experience the same feelings for yourself..
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/udo.jpeg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Mrs Udo Chika</span>
                                                    <span className="text-gray-800">Teacher</span>
                                                    <span className="text-gray-800">Rivers State</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “ProperFX has transformed me financially since I  signed up as an affiliate, with pfx, the sky is just the starting point and the best is yet to come!!!
                                    
                                         </p>
                                        </div>
                                    </div>
                                    
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        {/* <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext> */}
                        <ButtonNext role="button" aria-label="slide forward" className="bg-white border-2 border-brandGreen h-9 w-9 rounded-full absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-brandGreen" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" className="absolute left-3 top-2 fill-current text-brandGreen" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"  />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} isPlaying={true} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center ">
                  
                        <ButtonBack role="button" aria-label="slide backward" className="absolute bg-white border-2 border-brandGreen h-9 w-9 rounded-full z-30 left-0 ml-8 focus:outline-none focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer  hover:bg-brandGreen" id="prev">
                            <svg width={8} height={14} class="absolute left-3 top-2 fill-current text-brandGreen" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex gap-4 lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/fenibo.jpeg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Fenibo</span>
                                                    <span className="text-gray-800">Software Engineer</span>
                                                    <span className="text-gray-800">Lagos</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “Pfxnet is worth investing in. I see great prospects with them
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="grid rounded-lg border-2 py-8 px-4 max-w-sm max-h-52 h-52 overflow-y-auto transform hover:translate-x-4 hover:translate-y-4 hover:border-brandGreen ">
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto justify-between">
                                           
                                            <div className="flex gap-2 flex-wrap">
                                                <div>
                                                    <img src="/images/chris.jpg" className="w-10 rounded-full"/>
                                                </div>
                                                <div className="grid text-left">
                                                    <span className="font-semibold text-black block">Chris Chukwuemeka Mazi.</span>
                                                    <span className="text-gray-800"> Engineer</span>
                                                    <span className="text-gray-800">Lagos</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                            <span className="">4.5</span>
                                            <span className=" pt-1"><img src="/images/star.png " className="w-4"/></span>

                                            </div>
                                      
                                        </div>
                                        <div className="mt-4">
                                         <p className="flex text-justify text-brandGreen">
                                         “ PropertyFx is simply amazing, with their simplified process of acquiring lands and house hold property, I am already on my way to becoming a landlord and  with her unique and mutually beneficial Mono-line system my issue of cash is solved. I recommend you join and experience the success that comes with PropertyFx..
                                    
                                         </p>
                                        </div>
                                    </div>
                                    </Slide>
                                   
                                </div>
                            </Slider>
                        </div>
                     
                        <ButtonNext role="button" aria-label="slide forward" className="bg-white border-2 border-brandGreen h-9 w-9 rounded-full absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-brandGreen" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" className="absolute left-3 top-2 fill-current text-brandGreen" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"  />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>


   
    
    </> );
}
 
export default Trusted;