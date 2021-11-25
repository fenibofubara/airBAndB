import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const ProductCategories = () => {
    return ( 
        <>
              <h6 className="uppercase  font-bold text-4xl md:text-left block text-black py-8">Product Categories</h6>
              <div className="container mx-auto ">
            <div className="flex items-center justify-center w-full h-full  sm:py-8 px-4">
                {/* Carousel for desktop and large size devices styled-fenibo */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={3} step={1} isPlaying={true} infinite={true}>
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
                                            <img src="/images/cat11.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-2xl border-b-4 ">
                                        Air-Conditioners 
                                        </div>
                                    
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat22.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                     Generator
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat3.png" alt="sitting area" className="object-cover object-center w-full" />
                                         
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                       Television
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat4.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                        Home Theater
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat5.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                        Standing Refrigerator
                                        </div>
                                    </Slide>

                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat6.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Deep Freezer
                                        </div>
                                    </Slide>
                                 
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat7.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Laptop/Computers
                                        </div>
                                    </Slide>

                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat8.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Washing Machine
                                        </div>
                                    </Slide>

                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat9.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Smart Phones
                                        </div>
                                    </Slide>

                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat10.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Gas Oven Cooker
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
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat11.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-2xl border-b-4 ">
                                        Air-Conditioners (Split and Window Units)
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat22.png" alt="sitting area" className="object-cover object-center w-full" />
                                     
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                     Generator
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat3.png" alt="sitting area" className="object-cover object-center w-full" />
                                       
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                       Television
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat4.png" alt="sitting area" className="object-cover object-center w-full" />
                                       
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                        Home Theater
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat5.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                        Standing Refrigerator
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat6.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Deep Freezer
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat7.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Laptop/Computers
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat8.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Washing Machine
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat9.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Smart Phones
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat10.png" alt="sitting area" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                      Gas Oven Cooker
                                        </div>
                                    </Slide>
                               
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} isPlaying={true} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                 
                        <ButtonBack role="button" aria-label="slide backward" className="absolute bg-white border-2 border-brandGreen h-9 w-9 rounded-full z-30 left-0 ml-8 focus:outline-none focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer  hover:bg-brandGreen" id="prev">
                            <svg width={8} height={14} class="absolute left-3 top-2 fill-current text-brandGreen" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat11.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                        </div>
                                        <div className="text-black font-semibold shadow-2xl border-b-4 ">
                                        Air-Conditioners 
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat22.png" alt="sitting area" className="object-cover object-center w-full" />
                                     
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                     Generator
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat3.png" alt="sitting area" className="object-cover object-center w-full" />
                                       
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                       Television
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="/images/cat4.png" alt="sitting area" className="object-cover object-center w-full" />
                                       
                                        </div>
                                        <div className="text-black font-semibold shadow-lg border-b-4 ">
                                        Home Theater
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

              
        </>
     );
}
 
export default ProductCategories;