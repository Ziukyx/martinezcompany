'use client'
import Link from 'next/link'
import { FadeIn } from '../FadeIn'


export function WorkWithUs3() {
  return (
    <section
      className="bg-white dark:bg-slate-950 py-16 sm:py-20 md:py-16 lg:pt-20 lg:pb-10 px-1 sm:px-5 lg:px-8"
    >
      <FadeIn>
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-2xl font-semibold text-center tracking-tight mx-auto xxs:text-xl xs:text-2xl xxs:mb-3 sm:text-3xl md:text-4xl md:max-w-3xl lg:mb-5 lg:text-4xl lg:max-w-4xl xl:max-w-6xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-400 dark:to-violet-400">
            Job opportunities
            </h2>
            <p className="mt-7 dark:xxs:px-1 dark:sm:px-0 xxs:text-center sm:text-center mx-auto xxs:text-3xl xxs:tracking-tighter sm:tracking-normal xxs:mb-3 xs:text-3xl sm:text-[26px] md:text-[31px] md:max-w-3xl lg:mb-0 lg:text-[42px] lg:max-w-5xl xl:max-w-6xl 2xl:max-w-full xl:text-[51px] 2xl:text-[55px] lg:leading-none text-blue-950 dark:text-white">
            Each challenge will be the reason to take<br className='xxs:hidden sm:block'/> the next step outside your comfort zone; <br className='xs:block dark:hidden sm:hidden'/>we<br className='xxs:hidden md:block'/> assure you that <span className='bg-[linear-gradient(to_right,theme(colors.blue.500),theme(colors.violet.500),theme(colors.blue.500))] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent'>it'll be worth it</span>, not that it'll be easy.
            </p>
            <p className="mt-7 xxs:mt-3 xs:mt-3 sm:mt-4 md:mt-3 lg:mt-3 xl:mt-7 xxs:tracking-tighter sm:tracking-normal dark:tracking-normal text-blue-950 dark:text-white xxs:text-base xs:text-lg sm:text-[19px] md:text-[23px] lg:max-w-5xl xl:max-w-6xl 2xl:max-w-full 2xl:text-3xl tracking-tight mx-auto">
            Our commitment is to understand and support each other, so if you feel identified with our values, share our mission and think that your profile fits, <span className='bg-gradient-to-r from-blue-500 to-violet-500 xxs:bg-[length:100%_1px] lg:bg-[length:100%_3px] bg-no-repeat bg-bottom'>we would love to meet you!</span>
            </p>
            <div className='flex flex-col items-center py-8'>
              <div className="gap-3 cursor-pointer bg-gradient-to-r shadow-md shadow-slate-200 dark:shadow-black from-slate-200 to-slate-100 dark:from-slate-900 dark:to-slate-950 to-90% px-7 py-3 rounded-full  hover:scale-105 duration-200 hover:from-slate-100 hover:to-slate-200 dark:hover:text-slate-500 dark:hover:from-slate-950 dark:hover:to-slate-900">
                <Link href="/contact" className="text-xl font-bold leading-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 dark:from-violet-400 from-30%  dark:to-blue-400">
                          Contact us
                </Link>
              </div>
            </div>
          </div>
      </FadeIn>
    </section>
  )
}
