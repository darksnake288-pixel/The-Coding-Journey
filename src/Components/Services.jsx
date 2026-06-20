import React from 'react'
import { TbWorldWww } from "react-icons/tb";
import { AiOutlineMobile } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaRegSmile } from "react-icons/fa";
import { IoPulseOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Services = () => {
    const ServiceData =[
        { id:1, title:"Web Development", icon:<TbWorldWww /> },
        { id:2, title:"Mobile Development", icon:<AiOutlineMobile /> },
        { id:3, title:"Software Development", icon:<HiOutlineDesktopComputer /> },
        { id:4, title:"Satisfied clients", icon:<FaRegSmile /> },
        { id:5, title:"SEO Optimization", icon:<IoPulseOutline /> },
        { id:6, title:"24/7 Support", icon:<BiSupport /> }
    ]

    return (
        <div className='container py-10 px-4 md:px-10 mx-auto'>
            <div>
                {/**Text TiTle */}
                <h1 className='text-4xl font-bold mb-10 text-center md:text-left'>Services we provide</h1>
            </div>
            
            {/* التعديل هنا: نقلنا الـ grid للـ ul علشان يطبق على الـ li مباشرة */}
            <ul data-aos="fade-right"  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-2xl font-semibold'>
                {ServiceData.map((service)=>(
                    <li 
                        className='flex flex-col items-center justify-center bg-[#f1ecec] rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:bg-white cursor-pointer h-48 gap-4' 
                        key={service.id}
                    >
                        {/* ضفنا مقاس وتنسيق للأيقونة علشان تظهر مظبوطة فوق الكلام */}
                        <span className="text-4xl text-black">{service.icon}</span>
                        <span>{service.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Services