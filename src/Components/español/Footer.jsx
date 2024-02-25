import React from 'react'
import { FadeIn } from '../FadeIn'

export const navigation = {
    social: [

      {
        name: 'Whatsapp',
        href: 'https://wa.me/34623954897',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512" className='text-[#25D366] hover:text-green-800 '>
            <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        ),
      },
      {
        name: 'Telegram',
        href: 'https://t.me/mart_comp',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='-mt-px text-[#3390EC] hover:text-sky-800'>
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/>
              <path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.303 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746l17.1-7.2Z"/>
            </g>
          </svg>
        ),
      },
      {
        name: 'Correo',
        href: 'mailto:admin@martinezcompany.eu',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" className='-mt-px text-[#F9BD05] hover:text-yellow-800'>
            <path fill="currentColor" d="M18.75 3H5.25l-.184.005A3.25 3.25 0 0 0 2 6.25v9.5l.005.184A3.25 3.25 0 0 0 5.25 19h6.467c.184-.422.445-.807.773-1.135l.365-.365H5.25l-.144-.006A1.75 1.75 0 0 1 3.5 15.75V8.374l8.15 4.29l.097.042a.75.75 0 0 0 .602-.042L20.5 8.373v2.634a3.294 3.294 0 0 1 1.5.253V6.25l-.005-.184A3.25 3.25 0 0 0 18.75 3ZM5.25 4.5h13.5l.143.006A1.75 1.75 0 0 1 20.5 6.25v.428L12 11.152L3.5 6.68v-.43l.006-.144A1.75 1.75 0 0 1 5.25 4.5Zm13.85 8.17l-5.903 5.902a2.686 2.686 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.685 2.685 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67Z"/>
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => ( 
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" className='text-[#FD00AB] hover:text-pink-900 -my-px'>
            <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
          </svg>
        ),
      },
      
      {
        name: 'X',
        href: '#',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" className='hover:text-gray-600 mt-px'>
            <path fill="currentColor" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"/>
          </svg>
        ),
      },
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/company/mart%C3%ADnez-company-management-intermediation/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BHjIfZXdRRr2X50ZTRXZx0w%3D%3D',
        icon: (props) => (
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className='text-[#0A66C2] hover:text-blue-800 -my-px' >
          <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
          </svg>
        ),
      },
    ],
  }

function Footer() {
  return (
    <FadeIn>
    <footer className="bg-white dark:bg-slate-950">
        <div className="mx-auto xxs:max-w-[280px] xs:max-w-[420px] sm:max-w-lg md:max-w-none md:px-5 xxs:py-10 xs:-py-20">
            <div className="mt-0 mb-6 flex justify-center xxs:space-x-7 xs:space-x-5 sm:space-x-10">
                {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-700 dark:text-gray-300 font-display">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-7 w-7 fifth" aria-hidden="true" />
                </a>
                ))}
            </div>

            <div className="pb-6 md:whitespace-nowrap columns-2 xxs:flex xxs:flex-wrap xxs:justify-center xxs:tracking-tighter sm:tracking-normal dark:tracking-normal xxs:space-x-1 md:space-x-2" aria-label="Footer">
                <div>
                    <a href='/avisolegal' className=" xxs:text-sm xs:text-md leading-6 after:content-['__·'] text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                    Aviso Legal
                    </a>
                    
                </div>
                <div>
                    <a href='/politicaprivacidad' className="xxs:text-sm xs:text-md leading-6 after:content-['__·'] text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                    Política de privacidad
                    </a>
                    
                </div>
                <div>
                    <a href='#' className="xxs:text-sm xs:text-md leading-6 after:content-['__·'] text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                    Política de <span className='italic'>cookies</span>
                    </a>
                    
                </div>
                <div>
                    <a href='/contacto' className="xxs:text-sm xs:text-md leading-6 after:content-['__·'] text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                    Contacto
                    </a>
                    
                </div>
                <div>
                    <a href='/contacto/#trabajanosotros' className="xxs:text-sm xs:text-md leading-6 text-blue-950 hover:text-blue-400 dark:text-gray-300 dark:hover:text-gray-600">
                    Trabaje con nosotros
                    </a>                   
                </div>
            </div>
            <p className="xxs:tracking-tighter sm:tracking-normal light:tracking-normal text-center xxs:text-[11px] xs:text-sm leading-5 text-gray-600/90 dark:text-gray-400">
                Martínez & Company Management & Intermediation &copy; 2024 <span className='xxs:opacity-0 lg:opacity-100'>-</span><br className='lg:hidden'/> Todos los derechos reservados
            </p>
        </div>
    </footer>
    </FadeIn>
  )
}

export default Footer