import { FadeIn } from '../FadeIn'
import FeaturesDesktop from './Mobil'

export default function Contacto() {
  return (
    <FadeIn>
    <div className="z-40 relative isolate bg-white dark:bg-slate-950 xxs:py-10 xs:py-10 sm:pb-20 md:pb-0 md:py-3 lg:py-20">
      <div className="mx-auto grid max-w-7xl lg:max-w-none xl:max-w-6xl 2xl:max-w-[1350px] grid-cols-1 lg:grid-cols-2 overflow-clip">
        <div className="relative px-5 pb-20 sm:pt-20 lg:static lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-lg 2xl:max-w-xl">
            <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 -z-10">
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[20%]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20 "
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-2xl tracking-tighter xxs:text-center xxs:text-3xl xs:text-[31px] sm:text-5xl md:text-6xl lg:text-left lg:text-[53px] lg:pl-8 xl:pl-0 xl:text-[68px] 2xl:text-7xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.300),theme(colors.blue.950),theme(colors.blue.300))] dark:bg-[linear-gradient(to_right,theme(colors.blue.400),theme(colors.blue.100),theme(colors.blue.400))] bg-[length:200%_auto] animate-gradient py-5 mx-auto xs:max-w-md sm:max-w-5xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xs:mb-5 md:mb-8 lg:mb-8 xl:mb-10 2xl:mb-12">¿Cómo podemos ayudarle?</h2>
            <p className="mt-6 text-blue-950 dark:text-white lg:pl-8 xl:pl-0 texto">
            Ya sea para resolverle dudas o preguntas sobre nuestros servicios, plantearnos una colaboración o compartir su experiencia con nosotros, <span className='font-avenirBook'>¡</span>no dude en contactarnos<span className='font-avenirBook'>!</span>
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300 lg:pl-8 xl:pl-0">
              <div className="flex gap-x-4 xxs:justify-center lg:justify-normal">
                <dt className="flex-none">
                  <span className="sr-only ">Telephone</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='xxs:h-7 xxs:w-6 md:h-8 md:w-7 text-blue-950 dark:text-white'>
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21a12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"/>
                    </svg>
                </dt>
                <dd>
                  <a className="text-blue-950 hover:text-blue-300 dark:hover:text-gray-500 dark:text-white texto" href="tel:+34 623 954 897">
                    +34 623 954 897
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4 xxs:justify-center lg:justify-normal">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='xxs:h-7 xxs:w-6 md:h-10 md:w-8 text-blue-950 dark:text-white'>
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                  </svg>
                </dt>
                <dd>
                  <a className="text-blue-950 hover:text-blue-300 dark:hover:text-gray-500 dark:text-white texto" href="mailto:admin@martinezcompany.eu">
                    admin@martinezcompany.eu
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className='md:mb-32 lg:mb-0 2xl:mb-10 lg:col-span-4 xl:mt-0 xl:col-start-2 xl:col-span-3 2xl:col-start-3'>
              <FeaturesDesktop />
          </div>
        </div>
        </div>
    </div>
    </FadeIn>
)
}
