import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);
function LearnSection() {

    const learnPoints = [
        {
            title: 'Gain Confidence and Trade Successfully',
            description: 'Access the latest market trends and insights for informed trading decisions.',
            ref: useRef(null)
        },
        {
            title: 'Learn Faster and Smarter with AI-Powered',
            description: 'Get real-time suggestions for effective learning and faster progress.',
            ref: useRef(null)
        },
        {
            title: 'Save Time and Maximize ROI',
            description: 'Stay updated on market trends and achieve better returns on investments.',
            ref: useRef(null)
        },
        {
            title: 'Connect and Succeed with Community',
            description: 'Join a supportive community of traders and experts to achieve your trading goals.',
            ref: useRef(null)
        },
        {
            title: 'Achieve Trading Goals ',
            description: 'Get everything you need to succeed in the stock market and achieve your trading goals.',
            ref: useRef(null)
        },
    ]

    useEffect(() => {
        learnPoints.forEach((item) => {
            gsap.from(item.ref.current, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                scrollTrigger: {
                    trigger: item.ref.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    }, []);

    return (
        <div className='w-11/12 mx-auto my-28 py-8 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  bg-[#f9fafb]'>
            <div className='flex items-center justify-center  '>
                <div className=' bg-[#f9fafb] '>
                    <h1 className='text-4xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl  font-extrabold leading-normal text-slate-900 mb-12' >WHAT YOU’LL GET AS A <span className='text-slate-500  -rotate-12'>RESULT</span></h1>
                    {/* <button className='rounded-full p-4 px-8 bg-[#c6e912] text-slate-900 font-semibold text-lg'>Get Started</button> */}
                </div>
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 py-8 z-0 sticky top-0 bg-[#f9fafb] '>
                {
                    learnPoints.map(({ title, description, ref } = item, id) => (
                        <div className={`sticky top-40  border m-8 p-4 rounded-xl bg-[#f9fafb]  `} key={id} ref={(el) => (learnPoints[id].ref = el)} >
                            <div className='absolute z-0 -top-8 -left-8 p-8 h-12 w-12 bg-yellow-300 text-slate-900 flex items-center justify-center font-extrabold text-xl rounded-lg mb-6' >{id + 1}</div>
                            <h1 className='mt-8 text-md font-semibold text-lg mb-2 text-slate-900'>{title}</h1>
                            <p className='text-md text-gray-600'>{description}</p>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default LearnSection