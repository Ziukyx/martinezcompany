import React from 'react'
import '../../styles/globals.css'
import Image from 'next/image'
import ImgCta from '../../Images/prueba2.svg'
import Link from 'next/link'
import { FadeIn } from '../FadeIn'

function CtaEsp() {
  return (
    <FadeIn>
    <div className='bg-white dark:bg-slate-950 xs:py-16 xxs:py-10 sm:py-20'>
      <div className='mx-auto w-screen xxs:max-w-[340px] xs:max-w-[390px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'>       
        <div className='flex xxs:flex-col lg:items-start lg:space-x-1 lg:flex-row lg:px-7 lg:p-5 xl:p-5 xl:px-16 xl:space-x-0 2xl:px-[74px] 2xl:space-x-6 2xl:p-10 lg:rounded-xl lg:bg-gradient-to-r dark:lg:from-slate-950 dark:lg:from-10% dark:lg:via-blue-950 dark:lg:to-slate-950 lg:to-90% text-white lg:shadow-lg lg:shadow-slate-200 dark:lg:shadow-black'>
          
            <div className="flex-none sm:mx-auto sm:max-w-2xl lg:max-w-full lg:mt-14 lg:-ml-px lg:basis-[27%] xl:mt-9 xl:basis-[24%] 2xl:pl-0 2xl:mt-10 2xl:basis-[30%] 2xl:ml-0 2xl:mr-0">
                <h1 className="xxs:text-center lg:text-left xxs:pb-2 xxs:text-3xl xs:text-4xl sm:text-5xl md:pb-5 md:text-6xl lg:text-[36px] xl:text-5xl 2xl:text-5xl tracking-tight text-blue-950 dark:text-white">¿Dudas o<br className='xxs:hidden lg:block xl:hidden'/> preguntas?</h1>
                <h1 className="xxs:text-center xxs:tracking-normal lg:tracking-tighter 2xl:tracking-normal lg:text-left sm:mt-3 md:mt-0 lg:mt-0 xxs:text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-[22px] 2xl:text-[28px] font-semibold bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">Estamos a su disposición <span className='text-blue-950 dark:text-white font-semibold dark:font-extralight bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 xxs:bg-[length:100%_1px] lg:bg-[length:100%_3px] bg-no-repeat bg-bottom'><br className='xxs:block lg:block'/>para ayudarle.</span></h1>               
            </div>

            <div className="flex lg:py-8 xl:py-0 xxs:max-w-xxs xxs:mx-auto xs:w-96 xxs:mt-14 sm:w-96 sm:mt-14 md:w-[490px] md:mt-16 lg:mt-0 lg:max-w-none lg:pr-5 lg:w-auto lg:basis-[45%] xl:mt-0 xl:basis-[45%] 2xl:basis-[38%] 2xl:mt-5">
                  <Image
                  alt='Image'
                  src={ImgCta} 
                    className=''
                  />
            </div>

            <div className="flex-none xxs:mt-7 sm:mt-7 md:mt-8 lg:mt-7 xl:mt-5 2xl:mt-5 lg:basis-[25%] xl:basis-[26%] 2xl:basis-[27%]">
                  <p className='mt-5 text-blue-950 dark:text-white xxs:text-center xxs:text-2xl xs:text-2xl lg:text-left xl:text-center sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl tracking-tight'>Cuente con nosotros <br className='xxs:hidden lg:block 2xl:block'/>para <br className='xxs:hidden  xl:hidden'/>que podamos <br className='xxs:hidden lg:block '/>comprender<br className='xxs:hidden  xl:hidden 2xl:hidden'/> y<br className='xxs:block sm:hidden'/> superar<br className='hidden lg:block'/> sus expectativas.</p>
                  <div className='p-4 sm:mt-3 md:mt-5 lg:mt-0 2xl:p-6 mx-auto xxs:max-w-[200px] md:max-w-[300px] xl:max-w-[300px] 2xl:max-w-[250px]'>
                    <div class="animated-box in xxs:p-3 xxs:mt-5 xs:mt-5 sm:mt-0 md:py-5 lg:py-3 xl:p-3 xl:mr-0 2xl:p-4 2xl:mr-0 transform transition ease-out hover:scale-110">
                      <Link href='/contacto' className=''>
                      <h1 className='text-blue-950 dark:text-white xxs:text-lg md:text-2xl lg:text-xl xl:text-2xl xl:mb-1 hover:scale-105 font-semibold dark:font-normal'>Contáctenos</h1>
                      </Link>
                    </div>
                  </div>
            </div>
        
        
        </div>  
      </div>
      
    </div>
    </FadeIn>
  )
}

export default CtaEsp