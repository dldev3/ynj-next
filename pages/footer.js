import React from 'react';
import Link from 'next/link';

const footer = () => {
    return (
        <div>

            <div className="bg-red-700">

                <div className="p-20 mx-20 hidden md:block">
                    <div className="mb-2">
                        <Link href="/"><a href="/"><img src="/images/LogoWhite.png" alt="logo" /></a></Link>
                    </div>

                    <div className="flex">

                        <div className="w-3/12">
                            <p className="text-lg text-white">Your trusted partner in your journey to Canada</p>
                            <div className="flex justify-start space-x-6 mt-6">
                                <a target="_blank" href="https://www.facebook.com/Enlightenconsultancyservices"><img className="w-6 h-6" src="/images/Stock/FooterIcons/FB.png" alt="fb" /></a>
                                <a target="_blank" href="#"><img className="w-6 h-6" src="/images/Stock/FooterIcons/IG.png" alt="instagram" /></a>
                                <a target="_blank" href="#"><img className="w-6 h-6" src="/images/Stock/FooterIcons/IN.png" alt="linkedin" /></a>
                            </div>
                        </div>

                        <div className="w-2/12 flex flex-col ml-4">
                            <Link href="/about-us"><a className="text-white border-l-4 border-white text-md py-0.5  px-2 font-normal mb-6" href="/about-us">About</a></Link>
                            <Link href="/services"><a className="text-white border-l-4 border-white text-md py-0.5  px-2 font-normal mb-6" href="/services">Services</a></Link>
                            <Link href="/contact-us"><a className="text-white border-l-4 border-white text-md py-0.5  px-2 font-normal mb-6" href="/contact-us">Contact</a></Link>
                        </div>


                        <div className="w-3/12">
                            <div className="flex">
                                <img className="w-6 h-6" src="/images/Stock/FooterIcons/Location.png" alt="location" />
                                <div className="text-white ml-2">
                                    <h1 className="text-lg">Visit Us</h1>
                                    <p>236 2/1, Main Road, Attidiya, Dehiwala, Sri Lanka</p>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <img className="w-6 h-6" src="/images/Stock/FooterIcons/Call.png" alt="call" />
                                <div className="text-white ml-2">
                                    <h1 className="text-lg">Call Us</h1>
                                    <p>+94 77 399 6502</p>
                                    <p>+94 77 309 8918</p>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <img className="w-6 h-6" src="/images/Stock/FooterIcons/Email.png" alt="email" />
                                <div className="text-white ml-2">
                                    <h1 className="text-lg">Email Us</h1>
                                    <p>info @enlightensl.com</p>
                                </div>
                            </div>

                        </div>



                        <div className="w-4/12">
                            <h1 className="mb-4"><span className="text-white border-l-4 border-white text-lg py-0.5  px-2 font-normal">Working Hours</span></h1>
                            <p className="text-white ml-3">Our team is happy to serve you round the clock via appoinment, 24x7. Accordingly, we respond to your queries or documentation needs in less than 24 hours.</p>

                            <div className="text-white ml-3 mt-2 flex justify-between max-w-md">
                                <p>Monday to Friday</p>
                                <p>09:00-18:00</p>
                            </div>
                            <div className="text-white ml-3 mt-2 flex justify-between max-w-md">
                                <p>Saturday</p>
                                <p>09:00-13:00</p>
                            </div>
                            <div className="text-white ml-3 mt-2 flex justify-between max-w-md">
                                <p>Sunday & holidays</p>
                                <p>Closed</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div className="mx-36 py-4 md:flex justify-between hidden">
                <p className="">Copyright © 2021 YNJ Immigration. All rights reserved.</p>
                <p className="">Designed and Developed with ❤ from Sri Lanka</p>
            </div>



            {/* mobile footer */}
            <div className="bg-red-700 md:hidden">
                <div className="mx-12 p-6">

                    <div className="flex flex-col justify-center mb-12">

                        <Link href="/"><a href="/"><img className="h-auto w-auto mx-auto" src="/images/LogoWhite.png" alt="logo" /></a></Link>

                        <p className="text-center text-white text-lg">Your trusted partner in your journey to Canada</p>

                        <div className="flex justify-center space-x-4 mt-4">

                            <a target="_blank" href="https://www.facebook.com/Enlightenconsultancyservices"><img className="w-6 h-6" src="/images/Stock/FooterIcons/FB.png" alt="fb" /></a>
                            <a target="_blank" href="#"><img className="w-6 h-6" src="/images/Stock/FooterIcons/IG.png" alt="instagram" /></a>
                            <a target="_blank" href="#"><img className="w-6 h-6" src="/images/Stock/FooterIcons/IN.png" alt="linkedin" /></a>

                        </div>
                    </div>

                    <div className="flex justify-between mb-4">
                        <Link href="/"><a className="text-white border-l-4 border-white text-lg tracking-wide py-0.5  px-2 font-normal mb-6" href="/about-us">About</a></Link>
                        <Link href="/services"><a className="text-white border-l-4 border-white text-lg tracking-wide py-0.5  px-2 font-normal mb-6" href="/services">Services</a></Link>
                        <Link href="/contact-us"><a className="text-white border-l-4 border-white text-lg tracking-wide py-0.5  px-2 font-normal mb-6" href="/contact-us">Contact</a></Link>
                    </div>

                    <div className="flex">
                        <img className="w-8 h-8" src="/images/Stock/FooterIcons/Location.png" alt="location" />
                        <div className="text-white ml-4">
                            <h1 className="text-xl">Visit Us</h1>
                            <p className="text-lg">236 2/1, Main Road, Attidiya, Dehiwala, Sri Lanka</p>
                        </div>
                    </div>

                    <div className="flex mt-8">
                        <img className="w-8 h-8" src="/images/Stock/FooterIcons/Call.png" alt="call" />
                        <div className="text-white ml-4">
                            <h1 className="text-xl">Call Us</h1>
                            <p className="text-lg">+94 77 399 6502</p>
                            <p className="text-lg">+94 77 309 8918</p>
                        </div>
                    </div>

                    <div className="flex mt-8">
                        <img className="w-8 h-8" src="/images/Stock/FooterIcons/Email.png" alt="email" />
                        <div className="text-white ml-4">
                            <h1 className="text-xl">Email Us</h1>
                            <p className="text-lg">info @enlightensl.com</p>
                        </div>
                    </div>

                </div>

            </div>


            <div className="flex flex-col text-center py-2 md:hidden">
                <p className="text-md leading-8">Copyright © 2021 YNJImmigration. All rights reserved.</p>
                <p className="text-md leading-8">Designed and Developed with ❤ from Sri Lanka</p>
            </div>
            {/* mobile footer end */}
        </div>
    )
}

export default footer
