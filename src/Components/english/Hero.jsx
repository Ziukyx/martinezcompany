import Link from 'next/link' 
import React from 'react' 
import { FadeIn } from '../FadeIn' 
import { BackgroundIllustration } from '../español/HeroEsp'


 
function Hero() { 
  return ( 
    <FadeIn> 
    <div className='relative bg-white dark:bg-slate-950 mx-auto xxs:max-w-[330px] xs:max-w-lg sm:max-w-2xl md:max-w-5xl lg:max-w-6xl xl:max-w-full 2xl:max-w-full pb-20 py-20 xxs:pb-10 xxs:pt-5 xs:pb-14 sm:mt-28 sm:pb-16 md:pt-1 lg:mb-20 xl:mb-16 xl:mt-28 2xl:mt-28 2xl:mb-10 overflow-clip'> 
    <BackgroundIllustration className="z-0 absolute xxs:left-[30%] xxs:top-0 sm:top-0 sm:left-1/2 md:top-0 lg:left-[50%] xxs:h-[400px] xxs:w-[400px] xs:h-[500px] xs:w-[500px] sm:h-[670px] sm:w-[670px] md:h-[720px] md:w-[720px] lg:h-[996px] lg:w-[996px] xl:h-[1396px] xl:w-[1396px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-translate-x-1/2 xl:ml-0" />
      <div className='bg-white/40 dark:bg-slate-950/30 relative z-90 '>
          <div className='pb-1 z-90 sm:py-[7px] md:py-2 lg:py-5 font-semibold text-center xxs:text-2xl xs:text-[29px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] 2xl:mt-12 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient'> 
            <h1>We conceive projects,<br/>plan their development<br/>and manage their execution.</h1> 
          </div> 
      </div>
 
      <div className='bg-white/30 dark:bg-slate-950/30 relative z-90'>
      <div> 
        <p className='sm:mt-5 mx-auto text-center lg:max-w-[950px] xl:max-w-6xl 2xl:max-w-7xl xxs:text-[15px] xs:text-[18px] sm:text-3xl 2xl:text-4xl text-blue-950 dark:text-white xxs:mt-3 2xl:mt-4 '> Our purpose is to share dreams and bring<br className='xxs:block lg:hidden'/> your goals to life;<br className='xxs:hidden xl:block'/> progress is our mission, <br className='xxs:block lg:hidden '/><span className='bg-gradient-to-r from-blue-500 to-violet-500 xxs:bg-[length:100%_1px] lg:bg-[length:100%_3px] bg-no-repeat bg-bottom'>and growing together, our greatest success.</span>
        </p> 
      </div> 
      
 
      <div className='flex flex-col items-center justify-center xxs:py-8 lg:py-12'>
              <div className="gap-3 cursor-pointer bg-gradient-to-r shadow-lg from-slate-200 from-30% to-slate-100 dark:from-slate-900 dark:to-slate-950 to-90% xxs:px-7 lg:px-16 xxs:py-3  lg:py-5 rounded-full hover:scale-105 duration-200 hover:from-slate-100 hover:to-slate-200  dark:hover:text-slate-500 dark:hover:from-slate-950 dark:hover:to-slate-900">
                <Link href="/contact" className="xxs:text-xl lg:text-2xl 2xl:text-3xl font-bold leading-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-500  to-blue-500">
                Contact us
                </Link>
              </div>
            </div>
 </div>
    </div> 
    </FadeIn> 
  ) 
} 
 
export default Hero