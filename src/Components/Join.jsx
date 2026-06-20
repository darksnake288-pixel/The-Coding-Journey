import React from 'react'
import background from '../assets/banner.png'

const Join = () => {
  return (
    <div className="w-full bg-white">
        {/* 1. صححنا كلمة container وضفنا mx-auto لتوسيط السكشن.
          2. flex-col للموبايل يتحول إلى md:flex-row في الشاشات الكبيرة.
          3. استبدلنا pl-30 بـ px-4 للموبايل و md:px-12 للشاشات الكبيرة.
        */}
        <div className="container mx-auto py-12 md:py-20 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/** Left Section (Text & Button) */}
            {/* w-full للموبايل و md:w-1/2 للكمبيوتر، والكلام يتوسط تلقائياً في الشاشات الصغيرة */}
            <div data-aos="fade-right" className='flex flex-col gap-5 w-full md:w-1/2 text-center md:text-left items-center md:items-start'>
                
                {/* شيلنا w-100 وحطينا max-w-md لحماية العرض في الشاشات الكبيرة */}
                <h1 className='text-3xl md:text-4xl font-bold text-slate-800 leading-tight max-w-md'>
                    Join Our Community to Start your Journey
                </h1>
                
                <p className='text-gray-500 text-sm md:text-base leading-relaxed max-w-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam beatae quod sit. Deserunt inventore labore ea aliquid cum deleniti totam minus?
                </p>
                
                <button className='w-full sm:w-auto bg-amber-400 rounded-xl text-white px-8 py-3 font-bold cursor-pointer hover:bg-amber-500 duration-200 hover:translate-y-[-2px] shadow-md transition-all'>
                    Join Now
                </button>
            </div>
            
            {/** Right Image Section */}
            {/* شيلنا العرض الثابت w-[400px] وخليناه مرن ومتناسق */}
            <div data-aos="fade-left" className='w-full md:w-1/2 flex justify-center items-center'>
                <img 
                    src={background} 
                    alt="banner" 
                    className="w-full max-w-sm md:max-w-md h-auto object-cover drop-shadow-sm"
                />
            </div>

        </div>
    </div>
  )
}

export default Join