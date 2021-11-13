import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Sliderr() {
    return (
        <div className="container mx-auto md:my-12">
            <div className="flex items-center justify-center w-full h-full md:py-14 py-14 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
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
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                      
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/2.png" alt="sitting area" className="object-cover object-center w-full" />
                                       
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/3.png" alt="sitting area" className="object-cover object-center w-full" />
                                         
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/4.png" alt="sitting area" className="object-cover object-center w-full" />
                                       
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/5.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                       
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

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
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
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 1</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/5.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
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
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
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
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-white bg-opacity-30 absolute w-full h-full p-6">
                                         
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-white bg-opacity-30 absolute w-full h-full p-6">
                                       
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-white bg-opacity-30 absolute w-full h-full p-6">
                                    
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-white bg-opacity-30 absolute w-full h-full p-6">
                                           
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/5.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-white bg-opacity-30 absolute w-full h-full p-6">
                                          
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
    );
}
