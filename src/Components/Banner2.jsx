import React from 'react'
import education from '../assets/education.png'
import { FaBookOpen } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5"; 
import { MdOutlineAccessTime } from "react-icons/md";

const Banner2 = () => {
    const ServiceData=[
        { id:1, title:"10,000+ Courses", icon:<FaBookOpen /> },
        { id:2, title:"Expert Instruction", icon:<IoPersonAddOutline /> },
        { id:3, title:"Lifetime Access", icon:<MdOutlineAccessTime /> }
    ]

    return (
    <div className="w-full bg-white">
        {/* 1. التعديل هنا: flex-col للموبايل، وبيتحول لـ md:flex-row للشاشات الكبيرة.
          2. شيلنا pl-80 وحطينا px-4 للموبايل، و md:px-12 للشاشات الكبيرة عشان التوازن.
        */}
        <div className="container mx-auto py-12 md:py-20 px-4 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/** Left Image Section */}
            {/* جعلنا الحاوية مرنة والصورة تاخد العرض المتاح ليها بالكامل */}
            <div data-aos="fade-right" className='w-full md:w-1/2 flex justify-center'>
                <img 
                    src={education} 
                    alt='education' 
                    className='w-full max-w-md md:max-w-full h-auto object-cover'
                />
            </div>
            
            {/** Right Content Section */}
            <div data-aos="fade-up" className="w-full md:w-1/2">
                <h1 className='text-3xl md:text-4xl font-bold text-slate-800 leading-tight'>
                    The World's Leading Online learning Platform
                </h1>
                
                <div>
                    <ul className='flex flex-col gap-4 py-8 text-lg md:text-xl'>
                        {ServiceData.map((service)=>(
                            <li 
                                key={service.id}
                                // ضفنا items-center عشان الأيقونة والكلام يبقوا على خط واحد عمودياً
                                className='flex items-center bg-[#f8f6f6] rounded-2xl p-4 transition-all duration-350 hover:shadow-xl hover:bg-white cursor-pointer gap-4 border border-transparent hover:border-gray-100'
                            >
                                {/* تعديل حجم ولون الأيقونة لتتماشى مع التصميم */}
                                <span className="text-2xl text-amber-500 bg-amber-50 p-3 rounded-xl">
                                    {service.icon}
                                </span>
                                <span className="font-semibold text-slate-700">{service.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Banner2