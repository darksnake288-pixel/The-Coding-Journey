import React from 'react'
import images from '../assets/hero.png'

const Hero = () => {
  return (
    // السكشن الرئيسي
    <section className="w-full bg-white overflow-hidden">
      
      {/* Container الأب: 
          - flex-col-reverse في الموبايل (الصورة فوق والكلام تحت).
          - md:flex-row في الشاشات الكبيرة (الكلام شمال والصورة يمين).
          - px-4 للموبايل و md:px-12 للشاشات الكبيرة بدلاً من pl-40 الثابتة.
      */}
      <div className='container mx-auto py-12 md:py-24 px-4 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
        
        {/** Left Content Section */}
        {/* جعلنا الحاوية تاخد نصف الشاشة في الكمبيوتر w-full md:w-1/2 والمحتوى يتوسط في الموبايل */}
        <div data-aos="fade-up" className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
          
          {/* شيلنا العرض الثابت وخلينا الخط متجاوب text-3xl وعلي الشاشات الكبيرة md:text-5xl */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-800 max-w-xl'>
            Let's Learn to build a <span className='text-green-500'>Website</span> for your business
          </h1>
          
          {/* البادينج هنا مخصص ومظبوط ومتناسق مع الزرار */}
          <div className='pt-8 md:pt-10 w-full max-w-xs md:max-w-sm'>
            <button className='w-full bg-amber-400 rounded-xl text-white py-4 font-bold text-lg cursor-pointer hover:bg-green-700 duration-200 hover:translate-y-[-2px] shadow-md hover:shadow-lg transition-all'>
              Get Started
            </button>
          </div>

        </div>

        {/** Right Image Section */}
        {/* أصلحنا ديف الصورة وشيلنا الـ container الزايد والبادينج العشوائي */}
        <div data-aos="zoom-in-up" className='w-full md:w-1/2 flex justify-center items-center'>
          <img 
            src={images} 
            alt='hero' 
            className='w-full max-w-sm md:max-w-lg h-auto object-cover drop-shadow-md'
          />
        </div>

      </div>
    </section>
  )
}

export default Hero